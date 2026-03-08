# Math Learn 📚🧮

A modern, self-hosted learning platform for **California Common Core 6th Grade Mathematics**.

Built with Next.js 15, Tailwind CSS 4, PostgreSQL, Redis, and Docker - designed to run on your local server.

## 🎓 Curriculum

**California Common Core Standards - Grade 6**

| Domain | Code | Topics | Description |
|--------|------|--------|-------------|
| 📊 Ratios & Proportional Relationships | 6-RP | 5 | Unit rates, percentages, conversions |
| 🔢 The Number System | 6-NS | 8 | Fractions, decimals, negative numbers, coordinate plane |
| ➕ Expressions & Equations | 6-EE | 9 | Variables, equations, inequalities |
| 📐 Geometry | 6-G | 4 | Area, volume, surface area, polygons |
| 📈 Statistics & Probability | 6-SP | 6 | Data analysis, mean, median, graphs |

**Total: 32 topics across 5 domains**

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | React server components |
| Runtime | Bun 1.2 | Fast JavaScript execution |
| Styling | Tailwind CSS 4 + Custom UI | Modern styling |
| Database | PostgreSQL 16 | Relational data persistence |
| ORM | Drizzle Kit | Type-safe database operations |
| Cache/Session | Redis 7 | Fast caching and sessions |
| Proxy/Web Server | Caddy 2 | Automatic HTTPS |
| Deploy | Docker Compose | Container orchestration |

---

## 📁 Project Structure

```
math-learn/
├── docker-compose.yml      # Full stack orchestration
├── Caddyfile             # HTTPS reverse proxy config
├── .env.example          # Environment template
└── app/                  # Next.js application
    ├── Dockerfile
    ├── package.json
    ├── tsconfig.json
    ├── drizzle.config.ts   # Database migrations
    ├── src/
    │   ├── app/            # Next.js pages
    │   ├── components/     # UI components
    │   ├── lib/
    │   │   ├── curriculum.ts   # 6th grade math topics
    │   │   └── db.ts       # Database connection
    │   └── db/
    │       └── schema.ts   # Drizzle schema
    └── drizzle/            # Migration files
```

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Domain pointed to your server (for HTTPS)

### 1. Clone and Configure

```bash
# Clone the repo
git clone https://github.com/learnmv/math-learn.git
cd math-learn

# Create environment file
cp .env.example .env

# Edit with your settings
nano .env
```

### 2. Update Caddyfile

Edit `Caddyfile` and replace `yourdomain.com` with your actual domain:

```caddyfile
yourdomain.com {
    reverse_proxy app:3000
}

:2025 {
    reverse_proxy app:3000
}
```

### 3. Start Services

```bash
# Start all containers
docker compose up -d

# Run database migrations
docker compose exec app bun run db:migrate
```

### 4. Access

| Environment | URL |
|-------------|-----|
| Local/HTTP | http://localhost:2025 |
| Production/HTTPS | https://yourdomain.com |

---

## 🛠️ Development

### Local Development (without Docker)

```bash
cd app

# Install dependencies
bun install

# Set up local database
export DATABASE_URL="postgresql://mathapp:local@localhost:5432/mathlearn"

# Run migrations
bun run db:migrate

# Start dev server
bun run dev
```

### Database Migrations

```bash
# Generate new migration
docker compose exec app bun run db:generate

# Apply migrations
docker compose exec app bun run db:migrate

# Open database studio
docker compose exec app bun run db:studio
```

---

## 🔐 Security

- **HTTPS**: Automatic Let's Encrypt certificates via Caddy
- **Database**: Credentials via environment variables
- **No secrets in repo**: `.env` excluded from version control

---

## 📊 Data Persistence

All data persists across container restarts:

- `postgres_data` - PostgreSQL database files
- `redis_data` - Redis persistence
- `caddy_data` - SSL certificates

---

## 📝 Maintenance

```bash
# View logs
docker compose logs -f app

# Update containers
docker compose pull
docker compose up -d --build

# Backup database
docker compose exec db pg_dump -U mathapp mathlearn > backup.sql

# Restore database
docker compose exec -T db psql -U mathapp mathlearn < backup.sql

# Stop all
docker compose down
```

---

## 📚 Curriculum Reference

Based on **California Department of Education** standards:

| Standard Domain | Description |
|---------------|-------------|
| 6.RP | Ratios & Proportional Relationships |
| 6.NS | The Number System |
| 6.EE | Expressions & Equations |
| 6.G | Geometry |
| 6.SP | Statistics & Probability |

---

## 🎯 Roadmap

- [x] 6th Grade California Common Core Curriculum
- [x] Docker-based deployment
- [x] PostgreSQL database schema
- [ ] Question generation with AI
- [ ] User progress tracking
- [ ] Adaptive difficulty
- [ ] Parent/teacher dashboard
- [ ] 7th & 8th Grade expansion

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

*Built with ❤️ for 6th grade math learners*

🔗 **GitHub**: https://github.com/learnmv/math-learn
