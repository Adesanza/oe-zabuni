import axios from 'axios';

const billboardRoute = {
    get: "https://oe-zabuni-api.herokuapp.com/billboard/all",
    create: "https://oe-zabuni-api.herokuapp.com/billboard/create",
    edit: "https://oe-zabuni-api.herokuapp.com/billboard/",
    delete: "https://oe-zabuni-api.herokuapp.com/billboard/",
}

const billboardDataApi =  {
    get: async () => {
            const response = await axios.get(billboardRoute.get);
            console.log("get-all-billboard",response.data)
            if(response.data.message){
                throw new Error("Failed to fetch all billboards");
            }
            return response.data;
    },
    create: async (billboardData) => {
            const response = await axios.post(billboardRoute.create, billboardData);
            console.log("create-billboard",response.data)
            if(response.data.message){
                throw new Error("Failed to create billboard");
            }
            return response.data;
    },
    edit: async (billboardData) => {
            console.log("axis",billboardData)
            const response = await axios.patch(`${billboardRoute.edit}${billboardData._id}`, billboardData);
            console.log("edit-billboard",response.data)
            if(response.data.message){
                throw new Error("Failed to update billboard");
            }
            return response.data;
    },
    delete: async (billboardId) => {
            const response = await axios.delete(`${billboardRoute.delete}${billboardId}`);
            console.log("delete-billboard",response.data)
            if(response.data.message){
                throw new Error("Failed to delete billboard");
            }
            return response.data;
    },
   
}



export default billboardDataApi;