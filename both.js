// 简单的交互效果
// 技能项点击效果
window.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.classList.toggle('skill-active');
        });
    });

    // 页面加载时的淡入效果
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 0.5s ease-in-out';
    });
    let delay = 0;
    sections.forEach(section => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, delay);
        delay += 200;
    });

    // 项目卡片悬停效果
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
