document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', filterJobs);
});

function filterJobs() {
    const role = document.getElementById('role-filter').value;
    const type = document.getElementById('type-filter').value;
    const location = document.getElementById('location-filter').value;
    const level = document.getElementById('level-filter').value;
    const cgpa = document.getElementById('cgpa-filter').value;

    document.querySelectorAll('.job-listing').forEach(job => {
        const jobRole = job.getAttribute('data-role');
        const jobType = job.getAttribute('data-type');
        const jobLocation = job.getAttribute('data-location');
        const jobLevel = job.getAttribute('data-level');
        const jobCGPA = parseFloat(job.getAttribute('data-cgpa'));

        
        const matchesRole = (role === 'all' || role === jobRole);
        const matchesType = (type === 'all' || type === jobType);
        const matchesLocation = (location === 'all' || location === jobLocation);
        const matchesLevel = (level === 'all' || level === jobLevel);
        const matchesCGPA = (cgpa === 'all' || jobCGPA >= parseFloat(cgpa));

       
        if (matchesRole && matchesType && matchesLocation && matchesLevel && matchesCGPA) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}
