var canFinish = function(numCourses, prerequisites) {
    // If there are no prerequisites, all courses can be finished
    if (!prerequisites.length) {
        return true;
    }
    
    // Initialize arrays and map
    const indegree = Array(numCourses).fill(0); // Count of prerequisites for each course
    const courseDepend = new Map(); // Map to track courses dependent on each prerequisite
    
    // Populate indegree and courseDepend
    prerequisites.forEach((prerequisite) => {
        const val = courseDepend.has(prerequisite[1]) ? courseDepend.get(prerequisite[1]) : [];
        val.push(prerequisite[0]);
        courseDepend.set(prerequisite[1], val);
        indegree[prerequisite[0]]++;
    });
    
    // Initialize queue for topological sorting
    const q = [];
    indegree.forEach((v, i) => {
        if (v === 0) {
            q.push(i); // Add courses with no prerequisites to the queue
        }
    });
    
    let topoSort = 0; // Counter for courses in topological order
    
    // Perform topological sort
    while (q.length) {
        const course = q.shift(); // Remove course from queue
        topoSort++;
        const list = courseDepend.has(course) ? courseDepend.get(course) : [];
        list.forEach((dependentCourse) => {
            if (indegree[dependentCourse] === 1) {
                q.push(dependentCourse); // Add course to queue if its prerequisites are met
            }
            indegree[dependentCourse]--; // Decrease prerequisites count for the dependent course
        });
    };
    
    // Check if all courses were in topological order
    if (topoSort !== numCourses) {
        return false; // Not all courses can be finished
    }
    
    return true; // All courses can be finished
};
