interface PageParams {
    params:{
        teachername: string,
        teachermajor: string
    }
}

export default async function Page({params}:PageParams) {
    const {teachername, teachermajor} = await params

    return (
        <div>
            รหัสอาจารย์: {teachername}
            <br/>
            สังกัด: {teachermajor}
            <br/>
            สวัสดีจ้าาาาา
        </div>
    );
}