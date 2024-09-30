const data:any=[]

export function addUser(value:any){
    for(let d of data){
        if (value.email === d.email){
            return false
        }else{
            data.push()
            return true
        }
    }
}