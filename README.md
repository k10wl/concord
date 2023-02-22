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

Execute commands in running containers
```
docker exec <container name> <command>
```

Enter bash
```
docker exec -it <container name> bash
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
