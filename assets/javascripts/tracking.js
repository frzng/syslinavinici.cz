function tracking(id, write, strs) {
  if (![].map || ![].reduce || !document.querySelectorAll) return

  function cookies(name) {
    return document.cookie.
      split("; ").
      map(function(raw) {
        return raw.split("=", 2)
      }).
      reduce(function(hash, pair) {
        hash[pair[0]] = pair[1]
        return hash
      }, {})
  }

  function canWrite() {
    return !(
      window.doNotTrack === "1" ||
      navigator.doNotTrack === "1" ||
      navigator.doNotTrack === "yes" ||
      navigator.msDoNotTrack === "1"
    ) && (id in cookies()) && !!cookies()[id]
  }

  function canAsk() {
    return !(
      window.doNotTrack === "1" ||
      navigator.doNotTrack === "1" ||
      navigator.doNotTrack === "yes" ||
      navigator.msDoNotTrack === "1"
    ) && !(id in cookies())
  }

  function scheduleToAsk() {
    window.addEventListener("load", ask, false)
  }

  function ask() {
    window.removeEventListener("load", ask, false)

    var form = document.createElement("FORM")
    form.className = "js-tracking";
    form.style.margin = "0";
    form.style.padding = "0";
    form.style.borderBottom = "1px solid";
    form.onsubmit = function(ev) { ev.preventDefault() }

    var wrap = document.createElement("DIV")
    wrap.className = "row-container flex flex--small-wrap"
    wrap.style.alignItems = "flex-end";
    wrap.style.paddingTop = "12px";

    var p = document.createElement("P")
    p.style.flex = "1 1 auto"
    p.textContent = strs.q

    var controls = document.createElement("DIV")
    controls.style.flex = "0 0 auto"
    controls.style.marginTop = "-2px";
    controls.style.marginBottom = "8px";
    controls.style.textAlign = "right";

    var label = document.createElement("LABEL")
    label.style.display = "inline"
    label.textContent = " " + strs.r
    var checkbox = document.createElement("INPUT")
    checkbox.type = "checkbox"
    checkbox.name = "remember"
    label.insertBefore(checkbox, label.firstChild)

    function answer() {
      receive(this === allow, checkbox.checked)
      document.body.removeChild(wrap)
    }

    var allow = document.createElement("BUTTON")
    allow.style.background = "#905372"
    allow.style.color = "white"
    allow.style.border = "0"
    allow.name = "allow"
    allow.value = "1"
    allow.textContent = strs.y
    allow.onclick = answer

    var deny = document.createElement("BUTTON")
    deny.style.background = "#905372"
    deny.style.color = "white"
    deny.style.border = "0"
    deny.type = "submit"
    deny.name = "allow"
    deny.value = ""
    deny.textContent = strs.n
    deny.onclick = answer

    wrap.appendChild(p)
    controls.appendChild(label)
    controls.appendChild(document.createTextNode(" "))
    controls.appendChild(allow)
    controls.appendChild(document.createTextNode(" "))
    controls.appendChild(deny)
    wrap.appendChild(controls)
    form.appendChild(wrap)

    var prevWraps = document.querySelectorAll('body > .js-tracking')
    document.body.insertBefore(
      form,
      prevWraps.length > 0 ?
        prevWraps[prevWraps.length - 1].nextSibling :
        document.body.firstChild
    )
  }

  function receive(allow, persist) {
    var cookie = id + "=" + (allow ? "1" : "")
    if (persist) {
      var expires = new Date()
      expires.setTime(expires.getTime() + 2 * 7 * 24 * 60 * 60 * 1000)
      cookie += "; expires=" + expires.toGMTString()
    }
    document.cookie = cookie

    if (allow) write()
  }

  if (canWrite()) {
    write()
  } else if (canAsk()) {
    scheduleToAsk()
  }
}
