def jekyll_config
  return @config if @config

  opts = {}
  opts['config'] = ENV['JEKYLL_CONFIG'] if ENV.key? 'JEKYLL_CONFIG'

  Jekyll.logger.log_level = :warn
  @config = Jekyll.configuration opts
  Jekyll.logger.log_level = :info

  @config
end
