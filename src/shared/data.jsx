const originalData = {
    clients: [
        { key: 0, name: "Sarah Johnson", company: "TechCorp Solutions", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "3", update: "Updated 5 days ago", update_checked: false },
        { key: 1, name: "Michael Chen", company: "Innovate Inc.", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "2", update: "Updated 5 hours ago", update_checked: true },
        { key: 2, name: "Emma Williams", company: "Bright Future", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "1", update: "Updated 1 day ago", update_checked: true },
        { key: 3, name: "David Martinez", company: "NextStep Digital", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "4", update: "Updated 5 days ago", update_checked: false },
        { key: 4, name: "Lisa Anderson", company: "Quantum Labs", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "2", update: "Updated 2 days ago", update_checked: true },
        { key: 5, name: "James Taylor", company: "Vertex Group", email: "sarah.johnson@techcorp.com", phone: "+1 (555) 123-4567", projects: "1", update: "Updated 4 hours ago", update_checked: true }
    ],
    projects: [
        { key: 0, name: "Mobile Banking App", clientId: 0, status: "In Progress", last_update: "Updated 5 days ago", update_checked: false, updates: [], documents: [] },
        { key: 1, name: "Project Beta", clientId: 1, status: "Completed", last_update: "Updated 5 hours ago", update_checked: true, updates: [], documents: [] },
        { key: 2, name: "Project Gamma", clientId: 2, status: "In Progress", last_update: "Updated 1 day ago", update_checked: true, updates: [], documents: [] },
        { key: 3, name: "Project Delta", clientId: 3, status: "Not Started", last_update: "Updated 5 days ago", update_checked: false, updates: [], documents: [] },
        { key: 4, name: "Project Epsilon", clientId: 4, status: "In Progress", last_update: "Updated 2 days ago", update_checked: true, updates: [], documents: [] },
    ],
    updates: [
        {
            key: 0, projectId: 0, 
            title: "Sprint planning meeting schedule",
            content: "Next sprint planning meeting set for March 18th at 10:00 AM. Agenda includes development roadmap review.",
            date: "Updated 5 days ago", checked: false
        },
        {
            key: 1, projectId: 0, 
            title: "Sprint planning meeting schedule",
            content: "Next sprint planning meeting set for March 18th at 10:00 AM. Agenda includes development roadmap review.",
            date: "Updated 5 days ago", checked: false
        },
        {
            key: 2, projectId: 0, 
            title: "Sprint planning meeting schedule",
            content: "Next sprint planning meeting set for March 18th at 10:00 AM. Agenda includes development roadmap review.",
            date: "Updated 5 days ago", checked: false
        },
        {
            key: 3, projectId: 0, 
            title: "Sprint planning meeting schedule",
            content: "Next sprint planning meeting set for March 18th at 10:00 AM. Agenda includes development roadmap review.",
            date: "Updated 5 days ago", checked: false
        },
        {
            key: 4, projectId: 1, 
            title: "Project Beta Successfully Launched",
            content: "Project Beta has been successfully launched and is now live. All features are functioning as expected and we have received positive feedback from users.",
            date: "Updated 5 hours ago", checked: true
        },
        {
            key: 5, projectId: 2, 
            title: "Development Phase Ongoing",
            content: "The development phase for Project Gamma is ongoing. We have completed the backend development and are currently working on the frontend components.",
            date: "Updated 1 day ago", checked: true
        },
        {
            key: 6, projectId: 3, 
            title: "Project Delta Kickoff",
            content: "Project Delta has officially kicked off. We have held the initial project meeting and are in the process of gathering requirements from the client.",
            date: "Updated 5 days ago", checked: false
        },
        {
            key: 7, projectId: 4, 
            title: "Project Epsilon Testing Phase",
            content: "Project Epsilon has entered the testing phase. We are currently conducting internal testing and will soon begin user acceptance testing with the client.",
            date: "Updated 2 days ago", checked: true
        }
    ],
    documents: [
        { key: 0, projectId: 0, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 1, projectId: 0, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 2, projectId: 0, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 3, projectId: 0, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 4, projectId: 0, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 5, projectId: 1, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 6, projectId: 1, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 7, projectId: 1, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 8, projectId: 1, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 9, projectId: 1, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 10, projectId: 2, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 11, projectId: 2, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 12, projectId: 2, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 13, projectId: 2, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 14, projectId: 2, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 15, projectId: 3, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 16, projectId: 3, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 17, projectId: 3, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 18, projectId: 3, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 19, projectId: 3, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 20, projectId: 4, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 21, projectId: 4, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 22, projectId: 4, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 23, projectId: 4, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 24, projectId: 4, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 25, projectId: 5, name: "Project Plan", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 26, projectId: 5, name: "Design Mockups", description: "Detailed plan for the mobile banking app project.", type: "Image", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 27, projectId: 5, name: "Technical Specifications", description: "Detailed plan for the mobile banking app project.", type: "Word", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 28, projectId: 5, name: "Project Charter", description: "Detailed plan for the mobile banking app project.", type: "PDF", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
        { key: 29, projectId: 5, name: "Test Cases", description: "Detailed plan for the mobile banking app project.", type: "Spreadsheet", source: { name: "jira", url: "https://jira.com" }, status: "ongoing" },
    ]
}
// let dataOut = structureData();
// function structureData() {
//     let data = originalData.clients.forEach(client => {
//         client.projects = originalData.projects.forEach(project => {
//             project.updates = originalData.updates.filter(update => update.projectId === project.key);
//             project.documents = originalData.documents.filter(document => document.projectId === project.key);
//             return project
//         });
//         return client;
//     });
//     console.log(originalData.clients.map(client => {
//         client.projects = originalData.projects.map(project => {
//             project.updates = originalData.updates.filter(update => update.projectId === project.key);
//             project.documents = originalData.documents.filter(document => document.projectId === project.key);
//             return project
//         });
//         return client;
//     }));
//     return data;
    
// }
// export function ResetData() {
//     dataOut = structureData();
// }

export default originalData;