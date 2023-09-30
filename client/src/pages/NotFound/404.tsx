import { Page, ProductPreviewCard } from "../../components";
function NotFound() {
    return (
        <Page>
            <div style={{display: "flex", alignContent: "center", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <h1>404 not Found</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHVndmpvdXZrNXBieHA0ZWxvdGRkMGhmZng1aW0xdXlrOWJiNHYyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VapWo1dvqJquP3frRb/giphy.gif" alt="404"  />
            </div>
        </Page>
        
    )
}

export default NotFound;
