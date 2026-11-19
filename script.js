/**
 * Customize your portfolio here.
 * Set `githubUsername` to your GitHub handle to automatically load your profile and repositories.
 * You can also preview any GitHub user via `?user=username` in the URL or the GitHub icon in the navbar.
 */
const PORTFOLIO_CONFIG = {
  githubUsername: "iakwebtech",
  brandName: "Iak Webtech Solution",
  role: "Full-Stack Developer & Open Source Contributor",
  availability: "Available for new opportunities",
  email: "imtiazalam6701@Gmail.com",
  skills: [
    "PHP & Laravel","VueJs","CodeIgniter",
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "HTML5 & CSS3",
    "PostgreSQL",
    "Docker",
    "Git & GitHub Actions",
    "REST & GraphQL",
  ],
  focusAreas: [
    "Building responsive, accessible web interfaces with clean UI/UX",
    "Designing reliable REST & GraphQL APIs and scalable backends",
    "Writing automated tests, CI/CD workflows, and developer tooling",
    "Contributing to open-source communities on GitHub",
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Senior Software Engineer",
      org: "Open Source & Independent Consulting",
      summary:
        "Architecting modern web applications, developer tools, and automated workflows with a focus on performance and maintainability.",
    },
    {
      period: "2022 — 2024",
      role: "Full-Stack Developer",
      org: "Tech Studio",
      summary:
        "Built customer-facing dashboards and APIs serving thousands of daily active users, reducing page load times and improving test coverage.",
    },
    {
      period: "2020 — 2022",
      role: "Frontend Engineer",
      org: "Digital Agency",
      summary:
        "Delivered responsive websites, design systems, and interactive web experiences for startups and enterprise clients.",
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/iakwebtech" },
    { label: "LinkedIn", url: "https://linkedin.com/iakweb" },
    { label: "Website", url: "https://iakwebtech.com" },
  ],
  maxRepos: 9,
};

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  Ruby: "#701516",
  Shell: "#89e051",
  Vue: "#41b883",
  Dart: "#00B4AB",
};

const CACHE_TTL_MS = 15 * 60 * 1000;

const state = {
  username: PORTFOLIO_CONFIG.githubUsername,
  repos: [],
  activeLanguage: "All",
  searchQuery: "",
};

const $ = (id) => document.getElementById(id);

function initTheme() {
  const saved = localStorage.getItem("portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  $("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio_theme", next);
  });
}

function initNavigation() {
  const menuBtn = $("mobileMenuBtn");
  const navLinks = $("navLinks");

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        document.querySelectorAll(".nav-link").forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function renderStaticSections() {
  $("brandName").textContent = PORTFOLIO_CONFIG.brandName;
  $("heroRole").textContent = PORTFOLIO_CONFIG.role;
  $("availabilityText").textContent = PORTFOLIO_CONFIG.availability;
  $("footerYear").textContent = new Date().getFullYear();

  $("contactEmailBtn").href = `mailto:${PORTFOLIO_CONFIG.email}`;
  $("copyEmailBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
      $("copyFeedback").textContent = `Copied ${PORTFOLIO_CONFIG.email} to clipboard.`;
    } catch {
      $("copyFeedback").textContent = `Email: ${PORTFOLIO_CONFIG.email}`;
    }
    setTimeout(() => {
      $("copyFeedback").textContent = "";
    }, 3000);
  });

  const focusList = $("focusList");
  focusList.innerHTML = PORTFOLIO_CONFIG.focusAreas.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const skillsGrid = $("skillsGrid");
  skillsGrid.innerHTML = PORTFOLIO_CONFIG.skills
    .map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`)
    .join("");

  const timeline = $("experienceTimeline");
  timeline.innerHTML = PORTFOLIO_CONFIG.experience
    .map(
      (item) => `
      <article class="timeline-item">
        <div class="timeline-period">${escapeHtml(item.period)}</div>
        <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
        <div class="timeline-org">${escapeHtml(item.org)}</div>
        <p class="timeline-summary">${escapeHtml(item.summary)}</p>
      </article>`
    )
    .join("");

  renderSocialLinks(PORTFOLIO_CONFIG.socials);
}

function renderSocialLinks(socials) {
  $("socialLinks").innerHTML = socials
    .map(
      (s) => `
      <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="social-link">
        <span>${escapeHtml(s.label)}</span>
        <span aria-hidden="true">&nearr;</span>
      </a>`
    )
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatNumber(num) {
  if (num >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(num);
}

function readCache(username) {
  try {
    const raw = localStorage.getItem(`gh_portfolio_${username.toLowerCase()}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(username, data) {
  try {
    localStorage.setItem(
      `gh_portfolio_${username.toLowerCase()}`,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch {
    // Ignore storage quota errors
  }
}

async function fetchGitHubData(username) {
  const cached = readCache(username);
  if (cached) return cached;

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}`),
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`),
  ]);

  if (!userRes.ok) {
    throw new Error(
      userRes.status === 404
        ? `GitHub user "${username}" was not found.`
        : `GitHub API returned status ${userRes.status}.`
    );
  }

  const user = await userRes.json();
  const repos = reposRes.ok ? await reposRes.json() : [];

  const data = { user, repos };
  writeCache(username, data);
  return data;
}

function updateProfileUI(user, repos) {
  const displayName = user.name || user.login;
  document.title = `${displayName} — Developer Portfolio`;

  $("heroName").textContent = displayName;
  $("footerName").textContent = displayName;
  $("heroHandle").textContent = `@${user.login}`;
  $("heroAvatar").src = user.avatar_url;
  $("heroAvatar").alt = `${displayName} GitHub avatar`;
  $("heroGithubLink").href = user.html_url;
  $("locationText").textContent = user.location || "Remote / Worldwide";

  if (user.bio) {
    $("heroBio").textContent = user.bio;
  }

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  $("statRepos").textContent = formatNumber(user.public_repos ?? repos.length);
  $("statFollowers").textContent = formatNumber(user.followers ?? 0);
  $("statStars").textContent = formatNumber(totalStars);

  // Update GitHub social link to match loaded user
  const updatedSocials = PORTFOLIO_CONFIG.socials.map((s) =>
    s.label.toLowerCase() === "github" ? { ...s, url: user.html_url } : s
  );
  if (user.blog) {
    const blogUrl = user.blog.startsWith("http") ? user.blog : `https://${user.blog}`;
    const idx = updatedSocials.findIndex((s) => s.label.toLowerCase() === "website");
    if (idx >= 0) updatedSocials[idx] = { label: "Website", url: blogUrl };
  }
  renderSocialLinks(updatedSocials);

  // Top languages summary
  const langCounts = {};
  repos.forEach((r) => {
    if (!r.fork && r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });
  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([lang]) => lang);

  $("topLanguages").innerHTML = topLangs
    .map((lang) => `<span class="skill-chip">${escapeHtml(lang)}</span>`)
    .join("");
}

function buildLanguageFilters(repos) {
  const langs = new Set(["All"]);
  repos.forEach((r) => {
    if (r.language) langs.add(r.language);
  });

  const container = $("languageFilters");
  container.innerHTML = Array.from(langs)
    .slice(0, 8)
    .map(
      (lang) => `
      <button type="button" class="filter-pill ${lang === state.activeLanguage ? "active" : ""}" data-lang="${escapeHtml(lang)}">
        ${escapeHtml(lang)}
      </button>`
    )
    .join("");

  container.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeLanguage = btn.dataset.lang;
      container.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderRepos();
    });
  });
}

function renderRepos() {
  const grid = $("projectsGrid");
  const status = $("projectsStatus");

  const filtered = state.repos
    .filter((repo) => !repo.fork)
    .filter((repo) => state.activeLanguage === "All" || repo.language === state.activeLanguage)
    .filter((repo) => {
      if (!state.searchQuery) return true;
      const q = state.searchQuery.toLowerCase();
      return (
        repo.name.toLowerCase().includes(q) ||
        (repo.description || "").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, PORTFOLIO_CONFIG.maxRepos);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    status.hidden = false;
    status.textContent = "No matching public repositories found.";
    return;
  }

  status.hidden = true;
  grid.innerHTML = filtered
    .map((repo) => {
      const langColor = LANG_COLORS[repo.language] || "var(--accent-2)";
      const updated = new Date(repo.pushed_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      });
      return `
      <article class="repo-card">
        <div>
          <div class="repo-top">
            <h3 class="repo-name">
              <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(repo.name)}
              </a>
            </h3>
            <span class="repo-badge">${escapeHtml(updated)}</span>
          </div>
          <p class="repo-desc">${escapeHtml(repo.description || "No description provided.")}</p>
        </div>

        <div class="repo-meta">
          <span class="repo-lang">
            <span class="lang-dot" style="background: ${langColor}"></span>
            <span>${escapeHtml(repo.language || "Markdown")}</span>
          </span>
          <div class="repo-counts">
            <span class="repo-count" title="Stars">&#9733; ${formatNumber(repo.stargazers_count)}</span>
            <span class="repo-count" title="Forks">&#9906; ${formatNumber(repo.forks_count)}</span>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

async function loadGitHubProfile(username) {
  const status = $("projectsStatus");
  status.hidden = false;
  status.textContent = `Loading GitHub profile for @${username}...`;

  try {
    const { user, repos } = await fetchGitHubData(username);
    state.username = user.login;
    state.repos = repos;
    state.activeLanguage = "All";

    updateProfileUI(user, repos);
    buildLanguageFilters(repos);
    renderRepos();
  } catch (err) {
    status.hidden = false;
    status.textContent = `${err.message} You can still customize the portfolio in script.js.`;
    $("projectsGrid").innerHTML = "";
  }
}

function initModalAndSearch() {
  const modal = $("userModal");
  const input = $("usernameInput");

  $("switchUserBtn").addEventListener("click", () => {
    input.value = state.username;
    modal.hidden = false;
    input.focus();
  });

  $("closeModalBtn").addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });

  $("usernameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nextUser = input.value.trim();
    if (!nextUser) return;
    modal.hidden = true;
    loadGitHubProfile(nextUser);
  });

  $("repoSearch").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderRepos();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  renderStaticSections();
  initModalAndSearch();

  const params = new URLSearchParams(window.location.search);
  const queryUser = params.get("user");
  loadGitHubProfile(queryUser || PORTFOLIO_CONFIG.githubUsername);
});
