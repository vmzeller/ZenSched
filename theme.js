const zenSchedThemes = {
    purple: {
        nav: '#72577c',
        footer: '#5a4463',
        task: '#bfabc8',
        page: '#bfabc8',
        accent: '#72577c'
    },
    mint: {
        nav: '#5f8679',
        footer: '#3f6258',
        task: '#a8d8c6',
        page: '#a8d8c6',
        accent: '#5f8679'
    }
};

function applyZenSchedTheme(themeName) {
    const theme = zenSchedThemes[themeName] || zenSchedThemes.purple;

    document.documentElement.style.setProperty('--nav-bg', theme.nav);
    document.documentElement.style.setProperty('--footer-bg', theme.footer);
    document.documentElement.style.setProperty('--task-bg', theme.task);
    document.documentElement.style.setProperty('--page-border', theme.page);
    document.documentElement.style.setProperty('--settings-accent', theme.accent);
}

function applyZenSchedBrightness(value) {
    document.body.style.filter = `brightness(${value}%)`;
}

function loadZenSchedAppearance() {
    const savedTheme = localStorage.getItem('zenSchedTheme') || 'purple';
    const savedBrightness = localStorage.getItem('zenSchedBrightness') || '100';

    applyZenSchedTheme(savedTheme);
    applyZenSchedBrightness(savedBrightness);
    loadZenSchedProfilePhoto();
}

function loadZenSchedProfilePhoto() {
    const savedPhoto = localStorage.getItem('zenSchedProfilePhoto');
    if (!savedPhoto) return;

    document.querySelectorAll('.nav-profile-avatar').forEach(avatar => {
        avatar.style.backgroundImage = `url("${savedPhoto}")`;
    });
}

window.ZenSchedAppearance = {
    themes: zenSchedThemes,
    applyTheme: applyZenSchedTheme,
    applyBrightness: applyZenSchedBrightness,
    loadProfilePhoto: loadZenSchedProfilePhoto,
    load: loadZenSchedAppearance
};

document.addEventListener('DOMContentLoaded', loadZenSchedAppearance);
