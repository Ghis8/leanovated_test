

export let userData=[
    {
        email:"ghislainkongolo0@gmail.com",
        name:"Ghislain Kongolo",
        password:"password",
        organizations:['G-corp'],
        projects:['lms','datasaving'],
        activities:[],
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        email:"walkerghis@gmail.com",
        name:"Walker Ghis",
        password:"password1",
        organizations:['G-corp'],
        projects:['lms','datasaving'],
        activities:[],
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        email:"test1@gmail.com",
        name:"test name",
        password:"test123",
        organizations:['Test-Corp'],
        projects:['lms','datasaving'],
        activities:[],
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        email:"test2@gmail.com",
        name:"test2 name",
        password:"test299",
        organizations:['Test-Corp'],
        projects:['lms','datasaving'],
        activities:[],
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        email:"test3@gmail.com",
        name:"test3 names",
        password:"test3Password",
        organizations:['Test-Corp'],
        projects:['lms','datasaving'],
        activities:[],
        createdAt:new Date(),
        updatedAt:new Date()
    }
]

export const organizations=[
    {
        name:"G-Corp",
        member:['walkerghis@gmail.com',"ghislainkongolo0@gmail.com"],
        projects:["Ride Apps","Learning Platform"],
        roles:[
            {
                name:"walkerghis@gmail.com",
                role:"admin"
            },
            {
                name:"ghislainkongolo0@gmail.com",
                role:"member"
            },
        ]
    },
    {
        name:"Test-Corp",
        member:['test3@gmail.com',"test2@gmail.com",'test1@gmail.com'],
        projects:["Construction Portfolio","AI Prototype"],
        roles:[
            {
                name:"test3@gmail.com",
                role:"admin"
            },
            {
                name:"test2@gmail.com",
                role:"member"
            },
        ]
    }
]


export const Project=[
    {
        user:"walkerghis@gmail.com",
        organization:[],
        name:"lms",
        progress:0
    }
]
export const activities=[
    {
        user:"walkerghis@gmail.com",
        organization:"G-Corp",
        project:"Ride Apps",
        activities:["Setup the project","planned tasks"],
        updatedAt:new Date()
    }
]