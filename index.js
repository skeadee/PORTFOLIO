document.getElementById('profile_').addEventListener('click', function() {
    const scrollPosition = 400; // 원하는 스크롤 위치 (픽셀 단위)
    console.log("Move");
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤
    });
});

document.getElementById('skills_').addEventListener('click', function() {
    const scrollPosition = 900; // 원하는 스크롤 위치 (픽셀 단위)
    console.log("Move");
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤
    });
});

document.getElementById('project_').addEventListener('click', function() {
    const scrollPosition = 1850; // 원하는 스크롤 위치 (픽셀 단위)
    console.log("Move");
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤
    });
});