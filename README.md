# Seneca node-cron server

Cron server enabled by Seneca. Expose the port 4000 from container

| Variables | Description | Default |
|-----------|-------------|---------|
| LISTEN_HOST | Hostname to listen | null |
| LISTEN_TYPE | Listen type, for more info refer to [seneca-transport](https://github.com/senecajs/seneca-transport) | 'tcp' |
| CLIENT_HOST | Hostname to listen | null |
| CLIENT_PORT | Port to listen | 3000 |
| CLIENT_TYPE | Connection type with the client, for more info refer to [seneca-transport](https://github.com/senecajs/seneca-transport) | 'tcp' |
| CLIENT_PINS | Patterns to match when act to send to client, separate multiple pins using `|` | [] |

## For Mac users
To enable the server to route act to host machine please check [this](https://docs.docker.com/docker-for-mac/networking/#/use-cases-and-workarounds) for more info about connecting to a host service from a docker container.
