// Admin Panel Manager

// ==================== AUTHENTICATION ====================

// Check authentication on page load
window.addEventListener('load', () => {
    checkAuthentication();
});

function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
    
    if (!isAuthenticated) {
        // Redirect to login page
        window.location.href = 'login.html';
        return;
    }

    // Proceed with normal initialization
    initializeAdmin();
}

function handleLogout(e) {
    e.preventDefault();
    
    if (confirm('Are you sure you want to logout?')) {
        // Clear authentication from sessionStorage
        sessionStorage.removeItem('adminAuthenticated');
        sessionStorage.removeItem('adminLoginTime');
        
        // Redirect to login
        window.location.href = 'login.html';
    }
}

function initializeAdmin() {
    // Initialize admin panel
    loadFeaturedItems();
    loadProjects();
    setupEventListeners();
    updateExportCode();
}

// ==================== FEATURED ITEMS ====================

const FEATURED_STORAGE_KEY = 'portfolio_featured';
const PROJECTS_STORAGE_KEY = 'portfolio_projects';
let editingFeaturedIndex = null;
let editingProjectIndex = null;

function setupEventListeners() {
    document.getElementById('featuredForm').addEventListener('submit', handleAddFeatured);
    document.getElementById('projectForm').addEventListener('submit', handleAddProject);
    document.getElementById('editFeaturedForm').addEventListener('submit', handleEditFeatured);
    document.getElementById('editProjectForm').addEventListener('submit', handleEditProject);
}

function updateFeaturedFields() {
    const type = document.getElementById('featuredType').value;
    const videoFields = document.getElementById('videoFields');
    videoFields.style.display = type === 'video' ? 'block' : 'none';
}

function handleAddFeatured(e) {
    e.preventDefault();
    
    const featured = {
        type: document.getElementById('featuredType').value,
        platform: document.getElementById('featuredPlatform').value,
        title: document.getElementById('featuredTitle').value,
        description: document.getElementById('featuredDescription').value,
        handle: document.getElementById('featuredHandle').value,
        url: document.getElementById('featuredUrl').value,
        videoUrl: document.getElementById('featuredVideoUrl')?.value || '',
        thumbnail: document.getElementById('featuredThumbnail')?.value || '',
        color: document.getElementById('featuredColor').value || '#8b5cf6',
        verified: document.getElementById('featuredVerified').checked,
        autoplay: true,
        icon: document.getElementById('featuredType').value === 'video' ? 
            (document.getElementById('featuredPlatform').value === 'Instagram' ? 'REEL' : 'VIDEO') : 'ARTICLE',
        linkText: 'View Content →'
    };

    let items = getFeaturedItems();
    items.push(featured);
    localStorage.setItem(FEATURED_STORAGE_KEY, JSON.stringify(items));
    
    showAlert('Featured item added successfully!', 'success');
    document.getElementById('featuredForm').reset();
    loadFeaturedItems();
    updateExportCode();
}

function getFeaturedItems() {
    const stored = localStorage.getItem(FEATURED_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function loadFeaturedItems() {
    const items = getFeaturedItems();
    const list = document.getElementById('featuredList');
    
    if (items.length === 0) {
        list.innerHTML = '<p style="color: #999;">No featured items yet. Add one to get started!</p>';
        return;
    }

    list.innerHTML = items.map((item, idx) => `
        <div class="item">
            <div class="item-info">
                <div class="item-title">${item.title}</div>
                <div class="item-meta">${item.platform} • ${item.handle}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-secondary" onclick="openEditFeaturedModal(${idx})">Edit</button>
                <button class="btn btn-danger" onclick="deleteFeaturedItem(${idx})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteFeaturedItem(idx) {
    if (confirm('Delete this featured item?')) {
        let items = getFeaturedItems();
        items.splice(idx, 1);
        localStorage.setItem(FEATURED_STORAGE_KEY, JSON.stringify(items));
        loadFeaturedItems();
        updateExportCode();
        showAlert('Featured item deleted!', 'success');
    }
}

function openEditFeaturedModal(idx) {
    const items = getFeaturedItems();
    const item = items[idx];
    editingFeaturedIndex = idx;

    document.getElementById('editFeaturedType').value = item.type;
    document.getElementById('editFeaturedPlatform').value = item.platform;
    document.getElementById('editFeaturedTitle').value = item.title;
    document.getElementById('editFeaturedDescription').value = item.description || '';
    document.getElementById('editFeaturedHandle').value = item.handle;
    document.getElementById('editFeaturedUrl').value = item.url;
    document.getElementById('editFeaturedVideoUrl').value = item.videoUrl || '';
    document.getElementById('editFeaturedThumbnail').value = item.thumbnail || '';
    document.getElementById('editFeaturedColor').value = item.color || '#8b5cf6';
    document.getElementById('editFeaturedVerified').checked = item.verified || false;

    updateEditFeaturedFields();
    document.getElementById('editFeaturedModal').style.display = 'flex';
}

function updateEditFeaturedFields() {
    const type = document.getElementById('editFeaturedType').value;
    const videoFields = document.getElementById('editVideoFields');
    videoFields.style.display = type === 'video' ? 'block' : 'none';
}

function closeFeaturedModal() {
    document.getElementById('editFeaturedModal').style.display = 'none';
    editingFeaturedIndex = null;
}

function handleEditFeatured(e) {
    e.preventDefault();
    
    let items = getFeaturedItems();
    if (editingFeaturedIndex === null || editingFeaturedIndex >= items.length) {
        showAlert('Error: Item not found', 'error');
        return;
    }

    items[editingFeaturedIndex] = {
        type: document.getElementById('editFeaturedType').value,
        platform: document.getElementById('editFeaturedPlatform').value,
        title: document.getElementById('editFeaturedTitle').value,
        description: document.getElementById('editFeaturedDescription').value,
        handle: document.getElementById('editFeaturedHandle').value,
        url: document.getElementById('editFeaturedUrl').value,
        videoUrl: document.getElementById('editFeaturedVideoUrl')?.value || '',
        thumbnail: document.getElementById('editFeaturedThumbnail')?.value || '',
        color: document.getElementById('editFeaturedColor').value || '#8b5cf6',
        verified: document.getElementById('editFeaturedVerified').checked,
        autoplay: true,
        icon: document.getElementById('editFeaturedType').value === 'video' ? 
            (document.getElementById('editFeaturedPlatform').value === 'Instagram' ? 'REEL' : 'VIDEO') : 'ARTICLE',
        linkText: document.getElementById('editFeaturedType').value === 'video' ? 'View Content →' : 'Read Article →'
    };

    localStorage.setItem(FEATURED_STORAGE_KEY, JSON.stringify(items));
    closeFeaturedModal();
    loadFeaturedItems();
    updateExportCode();
    showAlert('Featured item updated!', 'success');
}

// ==================== PROJECTS ====================

function handleAddProject(e) {
    e.preventDefault();
    
    const project = {
        title: document.getElementById('projectName').value,
        role: document.getElementById('projectRole').value,
        description: document.getElementById('projectDescription').value,
        tags: document.getElementById('projectTags').value.split(',').map(t => t.trim()).filter(t => t),
        links: document.getElementById('projectLinks').value.split(',').map(l => l.trim()).filter(l => l),
        image: document.getElementById('projectImage').value || null,
    };

    let projects = getProjects();
    projects.push(project);
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    
    showAlert('Project added successfully!', 'success');
    document.getElementById('projectForm').reset();
    loadProjects();
}

function getProjects() {
    const stored = localStorage.getItem(PROJECTS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function loadProjects() {
    const projects = getProjects();
    const list = document.getElementById('projectsList');
    
    if (projects.length === 0) {
        list.innerHTML = '<p style="color: #999;">No projects yet. Add one to get started!</p>';
        return;
    }

    list.innerHTML = projects.map((project, idx) => `
        <div class="item">
            <div class="item-info">
                <div class="item-title">${project.title}</div>
                <div class="item-meta">${project.role}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-secondary" onclick="openEditProjectModal(${idx})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProject(${idx})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteProject(idx) {
    if (confirm('Delete this project?')) {
        let projects = getProjects();
        projects.splice(idx, 1);
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
        loadProjects();
        showAlert('Project deleted!', 'success');
    }
}

// ==================== EXPORT ====================

function updateExportCode() {
    const items = getFeaturedItems();
    
    const code = `  featured: [
${items.map(item => {
    if (item.type === 'video') {
        return `    {
      type: "video",
      icon: "${item.icon}",
      platform: "${item.platform}",
      title: "${escapeQuotes(item.title)}",
      description: "${escapeQuotes(item.description)}",
      handle: "${escapeQuotes(item.handle)}",
      linkText: "View Content →",
      url: "${item.url}",
      videoUrl: "${item.videoUrl}",
      thumbnail: "${item.thumbnail}",
      color: "${item.color}",
      autoplay: true,
      verified: ${item.verified}
    }`;
    } else {
        return `    {
      type: "article",
      icon: "${item.icon}",
      platform: "${item.platform}",
      title: "${escapeQuotes(item.title)}",
      description: "${escapeQuotes(item.description)}",
      handle: "${escapeQuotes(item.handle)}",
      linkText: "Read Article →",
      url: "${item.url}",
      color: "${item.color}",
      autoplay: false,
      verified: ${item.verified}
    }`;
    }
}).join(',\n')}
  ]`;

    document.getElementById('exportCode').value = code;
}

function copyExportCode() {
    const code = document.getElementById('exportCode');
    code.select();
    document.execCommand('copy');
    showAlert('Code copied to clipboard!', 'success');
}

function escapeQuotes(str) {
    return str.replace(/"/g, '\\"');
}

// ==================== UI HELPERS ====================

function switchTab(tabName) {
    // Hide all tabs in the same card
    const card = event.target.closest('.card');
    const tabs = card.querySelectorAll('.tab-content');
    tabs.forEach(t => t.classList.remove('active'));
    
    const buttons = card.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function showAlert(message, type) {
    const alertDiv = document.getElementById('alert');
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}
