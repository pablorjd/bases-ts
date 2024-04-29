import  axios  from 'axios';

export interface HttpApapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiApdater implements HttpApapter {

    private readonly axios = axios;
    async get<T>(url:string):Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log("Con Axios")
        return data;
    }

    // async post(url:string, data: any):Promise<any> {
    //     // const response = await axio.get(url)
    //     // return response.data;
    // }
    // async patch(url:string, data: any):Promise<any> {
    //     // // const response = await axio.get(url)
    //     // return response.data;
    // }

    // async delete(url:string):Promise<any> {
    //     // // const response = await axio.get(url)
    //     // return response.data;
    // }
}

export class PokeApiFetchApdater implements HttpApapter {

    async get<T>(url:string):Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log("Con Fetch")
        return data;
    }
}