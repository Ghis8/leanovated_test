'use client'

import CardComponent from "@/components/CardComponent";
import useAuthStore, { customStorage } from "@/stores/authStore";
import { userData } from "@/utils/dummyUserData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";


export default function Home() {
  const {user,addProject}=useAuthStore()
  const router=useRouter()
  const [createProject,setCreateProject]=useState(false)
  const [createOrganization,setCreateOrganization]=useState(false)
  const [organization,setOrganization]=useState({
    name:"",
    members:[]
  })
  const [projectName,setProjectName]=useState('')
  const [isHydrated, setIsHydrated] = useState(false);
  const loggedInUser=customStorage.getItem('user-storage')
  // console.log("user->",user)

  // if (!isHydrated) return <div>Loading...</div>
  // console.log("Logged In User->",loggedInUser?.state.user)

  if (!loggedInUser){
    router.push("/auth")
  }
  const AddProject=()=>{
    if(projectName===''){
      return toast.error("Project name required")
      setCreateProject(false)
    }
    // addProject(projectName)
    for(let element of userData){
      if(user?.email === element.email){
        element.projects.push(projectName)
        setCreateProject(false)
        
      }
    }
    
    return toast.success("Project Added")
  }
  const CreateOrganization=()=>{

  }
  useEffect(()=>{
    setIsHydrated(true)
  },[])
  // console.log("user",user)
  return (
    <section className="relative">
      {
          createProject && (
            <div className="absolute z-30 w-2/5 shadow-lg flex flex-col justify-center py-10 rounded-md mx-auto bg-white top-[20%] left-[35%]">
              <MdCancel 
                className="absolute top-5 right-5 cursor-pointer"
                size={24}
                color="black"
                onClick={()=>setCreateProject(false)}
              />
              <div className="text-center">
                <span className="text-black font-bold text-xl uppercase">Create a Project</span>
              </div>
              <input 
                onChange={(e)=>setProjectName(e.target.value.trim())}
                placeholder="Project Name"
                className="py-2 indent-2 border-[1px] border-gray-400 w-2/4 rounded-md mx-auto mt-10"
              />
              <button onClick={AddProject} className="bg-blue-600 py-2 w-1/4 mx-auto text-white rounded-md mt-5">Add Project</button>
            </div>
          )
        }
      <main className={createProject ?"w-3/4 blur-sm  mx-auto  mt-10":"w-3/4  mx-auto bg-white mt-10"}>
        
        <span className="text-2xl text-gray-800 font-semibold">Welcome to ProjectMaster</span>
        <div className="mx-auto my-5">
          <span className="text-xl">Dashboard</span>
          <div className="grid grid-cols-3 gap-x-4 mt-5">
            <CardComponent 
              title="My Projets"
              text={`You have ${user?.projects?.length} active projects`}
              click={()=>{}}
              label="View Projects"
            />
            <CardComponent 
              title="My Organizations"
              text={`You are a member of ${user?.organizations.length} organizations`}
              click={()=>{}}
              label="View Organisations"
            />
            <div className="shadow-md flex flex-col justify-center pl-10 py-5 space-y-4 bg-gray-100">
              <span className="font-semiboldold my-5 font-bold">Recent Activity</span>
              <div className="flex flex-col space-y-2">
                <span className="">Project "Website Redesign" updated</span>
                <span>New team member added to "Mobile App Development"</span>
                <span>Task "Create wireframes" completed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-5">
          <span className="text-xl">Projects</span>
          <div className="grid grid-cols-3 gap-x-4 mt-5">
            {
              user?.projects?.map(p=>(
                <CardComponent 
                  title={p}
                  text="Progress: 75%"
                  click={()=>{}}
                  label="View Project"
                />
              ))
            }
            {/* <CardComponent 
              title="Mobile App Development"
              text="Progress: 40%"
              click={()=>{}}
              label="View Project"
            />
            <CardComponent 
              title="Marketing Campaign"
              text="Progress: 70%"
              click={()=>{}}
              label="View Project"
            /> */}
            
          </div>
        </div>
        <button onClick={()=>setCreateProject(true)} className="bg-blue-600 w-1/6 py-3 rounded-md text-white text-center">Create Project</button>
        <div className="mx-auto my-5">
          <span className="text-xl">Organizations</span>
          <div className="grid grid-cols-3 gap-x-4 mt-5">
            <CardComponent 
              title="Tech"
              text="Role: Admin"
              click={()=>{}}
              label="Manage Organization"
            />
            <CardComponent 
              title="G-Corp"
              text="Role: Member"
              click={()=>{}}
              label="Manage Organization"
            />
          </div>
        </div>
        <button  className="bg-blue-600 w-1/6 py-3 rounded-md text-white text-center">Create Organization</button>
        <div className="my-5 w-2/4">
          <span className="capitalize text-wrap bg-blue-600  py-3 rounded-md text-white text-center">
            user management 
          </span>
        </div>
        <span className="">Add User</span>
      </main>
    </section>
    
  );
}
