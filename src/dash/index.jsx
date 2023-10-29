import "../dash/index.css";
import myimage from "../dash/myimage.jpg";

import image1 from "../dash/image1.png"
import image2 from "../dash/image2.png"
import image3 from "../dash/image3.png"
import image4 from "../dash/image4.png"
import image5 from "../dash/image5.png"
import image6 from "../dash/image6.png"
import { useState } from "react";
function Dashboard() {


    const [search, setSearch] = useState("")


    function searchValue(e) {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }

    function showSearchValue() {
        alert(search)
        setSearch("")

    }

    function showselectValue(e) {
        console.log("The Value is " + e.target.value)
    }
    

const product=[{image:"https://www.jotform.com/blog/wp-content/uploads/2010/05/3d-abstract-banner.jpg",name:"Abstract 3D",stock:"32 in Stock",price:"$45.99",sales:20},
{image:"https://m.media-amazon.com/images/I/91nbjD+UbFL._AC_UF350,350_QL80_.jpg",name:"Sharphen Illustration",stock:"32 in Stock",price:"$45.99",sales:20}
]

    return (
        <div className="main-div">
            <div className="left-div">
                <h2><i class="fa fa-codepen" style={{ fontSize: "30px", marginRight: "5px" }}></i>Dashboard</h2>
                <span className="options">
                    <p><i className="fa fa-dashboard" style={{ fontSize: "20px", marginRight: "5px", cursor: "pointer" }}></i>Dashboard</p>
                    <p><i className="fa fa-codiepie" style={{ fontSize: "20px", marginRight: "5px" }}></i>Product</p>
                    <p><i className="fa fa-user" style={{ fontSize: "20px", marginRight: "5px" }}></i>Customers</p>
                    <p><i className="fa fa-inr" style={{ fontSize: "20px", marginRight: "5px" }}></i>Income</p>
                    <p><i className="fa fa-bullhorn" style={{ fontSize: "20px", marginRight: "5px" }}></i>Promote</p>
                    <p><i className="fa fa-question" style={{ fontSize: "20px", marginRight: "5px" }}></i>Help</p>
                </span>


                <div className="bottom">
                    <img src={myimage} style={{ height: "30px", borderRadius: "50%" }}></img>
                    <a href="#" class="w3-bar-item w3-button vivek">Vivek Mondal</a>
                    <div class="w3-dropdown-hover w3-hover-orange">
                        <button class="w3-button w3-hover-orange"><i class="fa fa-caret-down"></i></button>
                        <div class="w3-dropdown-content w3-bar-block w3-white w3-card-4">
                            <a href="#" class="w3-bar-item w3-button">Log out</a>
                            <a href="#" class="w3-bar-item w3-button">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-div">
                <div className="top-right">
                    <span>
                        <h3 className="hello-heading">Hello Vivek <i className="fa fa-hand-stop-o" style={{ fontSize: "20px", marginRight: "5px" }}></i>,</h3>
                    </span>
                    <span>
                        <i className="fa fa-search serach" style={{ fontSize: "20px", marginRight: "5px" }} onClick={showSearchValue}></i><input className="inpt" type="text" value={search} onChange={searchValue} placeholder="Search" />
                    </span>


                </div>
                <div className="second-top-right">
                    <img className="dshimg" src={image1} alt="" />
                    <img className="dshimg" src={image2} alt="" />
                    <img className="dshimg" src={image3} alt="" />
                    <img className="dshimg" src={image4} alt="" />
                </div>

                <div className="third-top-right">
                    <img className="dshimg-big" src={image5} alt="" />
                    <img className="dshimg-mid" src={image6} alt="" />

                </div>

                <div className="right-div-lower-table">
                    <div className="upper-table">
                        <span className="upper-table-left">
                            <h2 className="product-sell">Product Sell</h2>
                        </span>
                        <span className="upper-table-right">
                            <i className="fa fa-search serach" style={{ fontSize: "20px", marginRight: "5px"  }} onClick={showSearchValue}></i><input className="inpt" type="text" value={search} onChange={searchValue} placeholder="Search" style={{border:"1px solid black"}}/>
                            <select className="select-tag" name="days" id="days" onChange={showselectValue} style={{border:"1px solid black"}}>
                                <option value="30days">Last 30 Days</option>
                                <option value="10days">Last 10 Days</option>
                                <option value="20days">Last 20 Days</option>
                                <option value="40days">Last 40 Days</option>
                            </select>
                        </span>
                    </div>
                    <div className="lower-table">
                        <div className="table-heading">
                            <span className="prdct-name">Product Name</span>
                            <span className="prdct-stock">Stock</span>
                            <span className="prdct-price">Price</span>
                            <span className="prdct-sale">Total Sales</span>
                        </div>
                        <div className="table-data">
                           {product.map((p,i)=>(
                            <div className="each-data">
                                 <span className="tbl-img"><img src={p.image} style={{width:"40px",height:"40px"}}></img><p className="prd-name">{p.name}</p></span>
                                 <span className="tbl-stock">{p.stock}</span>
                                 <span className="tbl-price">{p.price}</span>
                                 <span className="tbl-sale">{p.sales}</span>
                            </div>
                           
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;