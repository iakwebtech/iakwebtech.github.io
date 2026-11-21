/**
 * Portfolio Configuration
 * Update these fields to customize your personal portfolio.
 * You can also preview any GitHub profile by appending ?user=username to the URL.
 */
const PORTFOLIO_CONFIG = {
  githubUsername: "iakwebtech",
  fullName: "Imtiaz Alam Khan",
  brandName: "iakwebtech",
  role: "Full Stack Web Developer | PHP & Laravel Specialist",
  availability: "12+ Years Experience • Available for Projects",
  email: "imtiazalam6701@gmail.com",
  phone: "917003578764",
  website: "https://iakwebtech.com",
  location: "Kolkata, West Bengal, India",

  skillCategories: [
    {
      title: "Backend Development",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/></svg>`,
      skills: ["PHP", "Laravel", "CodeIgniter", "RESTful API Development"],
    },
    {
      title: "Frontend Development",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "Vue.js", "React.js"],
    },
    {
      title: "Database & Development Tools",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
      skills: ["MySQL", "Git", "GitHub", "API Integration"],
    },
    {
      title: "Specialized Development",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      skills: [
        "E-commerce Development",
        "School ERP Systems",
        "SaaS Application Development",
        "SMS Portal Development",
        "Payment Gateway Integration",
        "Third-Party API Integration",
        "AI-Powered Applications",
        "Business Management Systems",
      ],
    },
  ],

  services: [
    {
      title: "Custom Web Application Development",
      desc: "Tailored, scalable web applications engineered around your exact business workflows and operational goals.",
    },
    {
      title: "PHP & Laravel Development",
      desc: "Clean, maintainable MVC architectures, queues, authentication, and high-performance Laravel backends.",
    },
    {
      title: "CodeIgniter Development",
      desc: "Lightweight, fast, and reliable CodeIgniter applications, upgrades, and legacy system modernization.",
    },
    {
      title: "Vue.js & React.js Development",
      desc: "Interactive single-page applications, reactive dashboards, and modern component-driven user interfaces.",
    },
    {
      title: "E-commerce Website Development",
      desc: "Complete online stores with product variations, inventory tracking, checkout flows, and order management.",
    },
    {
      title: "School ERP Development",
      desc: "End-to-end academic management portals covering admissions, attendance, exams, fees, and parent communication.",
    },
    {
      title: "SaaS Application Development",
      desc: "Multi-tenant SaaS platforms with subscription billing, role-based access control, and analytics.",
    },
    {
      title: "RESTful API Development",
      desc: "Secure, versioned, well-documented APIs powering web apps, mobile apps, and external partner integrations.",
    },
    {
      title: "Payment Gateway Integration",
      desc: "Reliable online payment processing, webhook callback verification, refunds, and transaction reporting.",
    },
    {
      title: "POS & Inventory Management",
      desc: "Point-of-sale billing, barcode workflows, stock alerts, purchase tracking, and printable invoices.",
    },
    {
      title: "AI Application Integration",
      desc: "Practical AI-powered web tools, prompt workflows, and intelligent automation using modern AI APIs.",
    },
    {
      title: "Website Maintenance & Support",
      desc: "Ongoing performance tuning, security patching, bug resolution, database optimization, and feature updates.",
    },
  ],

  solutions: [
    {
      category: "Education ERP",
      title: "School ERP Management System",
      features: [
        "Student, teacher, and staff management",
        "Attendance and examination management",
        "Fee collection and invoice management",
        "Parent and student portals",
        "SMS notifications and reporting",
        "Multi-school management capabilities",
      ],
      stack: ["PHP", "Laravel", "MySQL", "Vue.js", "REST API"],
    },
    {
      category: "E-Commerce",
      title: "E-commerce Platform",
      features: [
        "Product and category management",
        "Product variations and inventory control",
        "Shopping cart and checkout flow",
        "Payment gateway integration",
        "Order and delivery management",
        "Admin dashboard and sales reports",
      ],
      stack: ["Laravel", "MySQL", "JavaScript", "AJAX", "Payment APIs"],
    },
    {
      category: "Cloud SaaS",
      title: "SaaS Application Architecture",
      features: [
        "Multi-tenant architecture",
        "Subscription and user management",
        "Role-based access control (RBAC)",
        "Multiple business/account management",
        "Dashboard and analytics",
        "RESTful API integration",
      ],
      stack: ["Laravel", "Vue.js", "React.js", "MySQL", "REST API"],
    },
    {
      category: "Retail & Billing",
      title: "POS & Inventory Management System",
      features: [
        "Fast Point of Sale billing",
        "Product and stock management",
        "Barcode support",
        "Invoice and receipt printing",
        "Sales and purchase management",
        "Detailed inventory reports",
      ],
      stack: ["PHP", "CodeIgniter", "MySQL", "jQuery", "AJAX"],
    },
    {
      category: "Messaging",
      title: "SMS Portal Platform",
      features: [
        "Bulk SMS campaign management",
        "Contact and group management",
        "SMS campaign scheduling",
        "Real-time delivery status tracking",
        "API-based SMS gateway integration",
      ],
      stack: ["PHP", "Laravel", "MySQL", "Gateway APIs"],
    },
    {
      category: "FinTech Integration",
      title: "Payment Gateway Integration",
      features: [
        "Secure online payment integration",
        "Verified transaction handling",
        "Webhook & payment callback management",
        "Transaction history and reporting",
        "E-commerce and POS payment support",
      ],
      stack: ["PHP", "Laravel", "REST APIs", "Webhooks"],
    },
    {
      category: "AI Automation",
      title: "AI-Powered Web Applications",
      features: [
        "AI-enabled web workflows",
        "AI prompt management platform",
        "Third-party AI API integrations",
        "Intelligent business process automation",
      ],
      stack: ["Laravel", "React.js", "Vue.js", "AI APIs"],
    },
  ],

  experienceStrengths: [
    {
      title: "12+ Years of Development Experience",
      desc: "Over a decade of hands-on full-stack software engineering, architecture design, and production maintenance.",
    },
    {
      title: "Full Stack Web Application Development",
      desc: "Seamless integration between robust PHP/Laravel/CodeIgniter backends and responsive JS/Vue/React frontends.",
    },
    {
      title: "Custom ERP & CRM Solutions",
      desc: "Building multi-module School ERPs, staff portals, and custom CRM systems tailored to organizational processes.",
    },
    {
      title: "E-commerce & SaaS Development",
      desc: "Designing multi-tenant SaaS platforms, subscription workflows, and scalable online storefronts.",
    },
    {
      title: "Payment Gateway & API Integrations",
      desc: "Connecting payment processors, SMS gateways, shipping providers, and third-party REST APIs securely.",
    },
    {
      title: "Database Design & Optimization",
      desc: "Structuring normalized MySQL schemas, indexing strategies, and query optimization for high-volume data.",
    },
    {
      title: "Business Process Automation",
      desc: "Eliminating manual spreadsheets and repetitive tasks with automated billing, reporting, and notifications.",
    },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/iakwebtech" },
    { label: "WhatsApp", url: "https://wa.me/917003578764" },
    { label: "Website", url: "https://iakwebtech.com" },
    { label: "Email", url: "mailto:imtiazalam6701@gmail.com" },
  ],
  maxRepos: 9,
};

const LANG_COLORS = {
  PHP: "#4F5D95",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Shell: "#89e051",
};

const CACHE_TTL_MS = 15 * 60 * 1000;

const state = {
  username: PORTFOLIO_CONFIG.githubUsername,
  repos: [],
  activeLanguage: "All",
  searchQuery: "",
  sortBy: "stars",
};

const $ = (id) => document.getElementById(id);

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

function initScrollEffects() {
  const progressBar = $("scrollProgress");
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
        progressBar.style.width = `${pct}%`;
        ticking = false;
      });
    },
    { passive: true }
  );

  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
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
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function renderStaticSections() {
  $("footerYear").textContent = new Date().getFullYear();

  $("downloadResumeBtn").addEventListener("click", () => {
    window.print();
  });

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

  // Render Skill Categories
  $("skillsCategoriesGrid").innerHTML = PORTFOLIO_CONFIG.skillCategories
    .map(
      (cat) => `
      <article class="skill-category-card">
        <div class="skill-cat-header">
          <span class="skill-cat-icon" aria-hidden="true">${cat.icon}</span>
          <h3>${escapeHtml(cat.title)}</h3>
        </div>
        <div class="skills-grid">
          ${cat.skills.map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");

  // Render Services
  $("servicesGrid").innerHTML = PORTFOLIO_CONFIG.services
    .map(
      (srv, idx) => `
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.9rem;">${String(idx + 1).padStart(2, "0")}</span>
        </div>
        <h3>${escapeHtml(srv.title)}</h3>
        <p>${escapeHtml(srv.desc)}</p>
      </article>`
    )
    .join("");

  // Render Solution Categories
  $("solutionsGrid").innerHTML = PORTFOLIO_CONFIG.solutions
    .map(
      (sol) => `
      <article class="solution-card">
        <div>
          <span class="solution-badge">${escapeHtml(sol.category)}</span>
          <h3>${escapeHtml(sol.title)}</h3>
          <ul class="solution-features">
            ${sol.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <div class="solution-stack">
            ${sol.stack.map((tech) => `<span class="topic-tag">${escapeHtml(tech)}</span>`).join("")}
          </div>
          <div class="solution-footer">
            <a href="#contact" class="repo-link inquire-solution" data-subject="${escapeHtml(sol.title)}">
              Discuss Similar Project &rarr;
            </a>
          </div>
        </div>
      </article>`
    )
    .join("");

  document.querySelectorAll(".inquire-solution").forEach((link) => {
    link.addEventListener("click", () => {
      const subjectInput = $("contactSubject");
      if (subjectInput) {
        subjectInput.value = `Inquiry: ${link.dataset.subject}`;
      }
    });
  });

  // Render Experience Strengths
  $("experienceGrid").innerHTML = PORTFOLIO_CONFIG.experienceStrengths
    .map(
      (exp, idx) => `
      <article class="experience-card">
        <div class="experience-num">${String(idx + 1).padStart(2, "0")}</div>
        <h3>${escapeHtml(exp.title)}</h3>
        <p>${escapeHtml(exp.desc)}</p>
      </article>`
    )
    .join("");

  // Render Social Links
  $("socialLinks").innerHTML = PORTFOLIO_CONFIG.socials
    .map(
      (s) => `
      <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="social-link">
        <span>${escapeHtml(s.label)}</span>
        <span aria-hidden="true">&nearr;</span>
      </a>`
    )
    .join("");

  // Graceful fallback if GitHub contribution chart image fails
  const chartImg = $("githubChartImg");
  if (chartImg) {
    chartImg.addEventListener("error", () => {
      $("githubChartWrap").innerHTML = `<p class="section-desc">Contribution graph unavailable right now. View full activity directly on <a href="https://github.com/${escapeHtml(state.username)}" target="_blank" rel="noopener noreferrer" class="repo-link">GitHub &nearr;</a>.</p>`;
    });
  }
}

function readCache(username, allowStale = false) {
  try {
    const raw = localStorage.getItem(`gh_portfolio_${username.toLowerCase()}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!allowStale && Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
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

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`),
    ]);

    if (!userRes.ok) {
      throw new Error(
        userRes.status === 403
          ? "GitHub API rate limit reached temporarily."
          : `GitHub API returned status ${userRes.status}.`
      );
    }

    const user = await userRes.json();
    const repos = reposRes.ok ? await reposRes.json() : [];

    const data = { user, repos };
    writeCache(username, data);
    return data;
  } catch (err) {
    const stale = readCache(username, true);
    if (stale) return stale;
    throw err;
  }
}

function updateProfileUI(user, repos) {
  if (
    user.avatar_url &&
    user.login.toLowerCase() !== PORTFOLIO_CONFIG.githubUsername.toLowerCase()
  ) {
    $("heroAvatar").src = user.avatar_url;
  }
  $("heroHandle").textContent = `@${user.login}`;
  $("heroGithubLink").href = user.html_url;
  $("viewAllReposBtn").href = `${user.html_url}?tab=repositories`;

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  $("statRepos").textContent = formatNumber(user.public_repos ?? repos.length);
  $("statFollowers").textContent = formatNumber(user.followers ?? 0);
  $("statStars").textContent = formatNumber(totalStars);
}

function buildLanguageFilters(repos) {
  const langs = new Set(["All"]);
  repos.forEach((r) => {
    if (!r.fork && r.language) langs.add(r.language);
  });

  const container = $("languageFilters");
  if (langs.size <= 1) {
    container.innerHTML = "";
    return;
  }

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

function showSkeletons(count = 3) {
  $("projectsStatus").hidden = true;
  $("projectsGrid").innerHTML = Array.from({ length: count })
    .map(() => `<div class="skeleton-card" aria-hidden="true"></div>`)
    .join("");
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
        (repo.description || "").toLowerCase().includes(q) ||
        (repo.topics || []).some((t) => t.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      if (state.sortBy === "updated") {
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      }
      return b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at);
    })
    .slice(0, PORTFOLIO_CONFIG.maxRepos);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    status.hidden = false;
    status.innerHTML =
      state.repos.length === 0
        ? `Public repositories for <strong>@${escapeHtml(state.username)}</strong> will appear here automatically as they are published on <a href="https://github.com/${escapeHtml(state.username)}" target="_blank" rel="noopener noreferrer" class="repo-link">GitHub &nearr;</a>.`
        : "No matching public repositories found.";
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
      const topicsHtml = (repo.topics || [])
        .slice(0, 3)
        .map((t) => `<span class="topic-tag">${escapeHtml(t)}</span>`)
        .join("");

      const liveUrl =
        repo.homepage && /^https?:\/\//i.test(repo.homepage.trim()) ? repo.homepage.trim() : "";

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
          <p class="repo-desc">${escapeHtml(repo.description || "Repository hosted on GitHub.")}</p>
          ${topicsHtml ? `<div class="repo-topics">${topicsHtml}</div>` : ""}
        </div>

        <div>
          <div class="repo-links">
            <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-link">Source Code &nearr;</a>
            ${liveUrl ? `<a href="${escapeHtml(liveUrl)}" target="_blank" rel="noopener noreferrer" class="repo-link">Live Demo &nearr;</a>` : ""}
          </div>
          <div class="repo-meta">
            <span class="repo-lang">
              <span class="lang-dot" style="background: ${langColor}"></span>
              <span>${escapeHtml(repo.language || "Web")}</span>
            </span>
            <div class="repo-counts">
              <span class="repo-count" title="Stars">&#9733; ${formatNumber(repo.stargazers_count)}</span>
              <span class="repo-count" title="Forks">&#9906; ${formatNumber(repo.forks_count)}</span>
            </div>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

async function loadGitHubProfile(username) {
  showSkeletons(3);

  try {
    const { user, repos } = await fetchGitHubData(username);
    state.username = user.login;
    state.repos = repos;
    state.activeLanguage = "All";

    updateProfileUI(user, repos);
    buildLanguageFilters(repos);
    renderRepos();
  } catch (err) {
    const status = $("projectsStatus");
    status.hidden = false;
    status.textContent = `${err.message} You can still view repositories directly on GitHub.`;
    $("projectsGrid").innerHTML = "";
  }
}

function initProjectControls() {
  $("repoSearch").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderRepos();
  });

  $("repoSort").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderRepos();
  });
}

function validateContactForm() {
  const name = $("contactName").value.trim();
  const email = $("contactEmail").value.trim();
  const subject = $("contactSubject").value.trim();
  const message = $("contactMessage").value.trim();

  let valid = true;
  $("errorName").textContent = "";
  $("errorEmail").textContent = "";
  $("errorSubject").textContent = "";
  $("errorMessage").textContent = "";

  if (name.length < 2) {
    $("errorName").textContent = "Please enter your name (at least 2 characters).";
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $("errorEmail").textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (subject.length < 3) {
    $("errorSubject").textContent = "Please enter a subject or project category.";
    valid = false;
  }
  if (message.length < 10) {
    $("errorMessage").textContent = "Please provide a brief description (at least 10 characters).";
    valid = false;
  }

  return valid ? { name, email, subject, message } : null;
}

function initContactForm() {
  const form = $("contactForm");
  const status = $("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    const data = validateContactForm();
    if (!data) return;

    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject}`);
    const mailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nProject Details:\n${data.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_CONFIG.email}?subject=${mailSubject}&body=${mailBody}`;
    status.textContent = "Opening your email client with your message details...";
  });

  $("sendWhatsappBtn").addEventListener("click", () => {
    status.textContent = "";
    const data = validateContactForm();
    if (!data) return;

    const text = encodeURIComponent(
      `Hello Imtiaz,\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`
    );
    window.open(`https://wa.me/${PORTFOLIO_CONFIG.phone}?text=${text}`, "_blank", "noopener,noreferrer");
    status.textContent = "Opening WhatsApp chat with your inquiry...";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollEffects();
  initNavigation();
  renderStaticSections();
  initProjectControls();
  initContactForm();

  const params = new URLSearchParams(window.location.search);
  const queryUser = params.get("user");
  loadGitHubProfile(queryUser || PORTFOLIO_CONFIG.githubUsername);
});
