# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Docker 🐳
### Pre-requirements ⚙️
Before running the project, ensure that you have completed the following steps:

1. Create a file named `.env.docker` in the root directory of the project;
2. Copy the contents from `.env.docker.example` into the `.env.docker` file;
3. Update the values in the .env.docker file with the required data.
```bash
# Execute steps 1 and 2 in single command
cp .env.docker.example .env.docker
```

The `.env.docker` file is used to store environment variables that are
required for the Docker container to run.
By copying the example file and updating the values,
you can ensure that the application will have the necessary configuration
to run properly.

Available containers

| Name         | Description                |
|--------------|----------------------------|
| `concord`    | nuxt app composed to image |
| `concord-db` | postgres database          |


### Cheatsheet 📝

Compose both containers
```bash
docker compose up
```

Start both containers and log server output
```bash
docker compose start
docker compose logs -f concord
```

Stop all containers
```bash
docker compose stop
```

Start single container
```
docker compose start <container-name>
```

Execute commands in running containers
```
docker exec <container-name> <command>
```

Enter bash
```
docker exec -it <container-name> bash
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
