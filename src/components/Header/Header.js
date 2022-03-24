import React, { useEffect, useState } from 'react';
import { userLoginService } from '../../Services/service';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {

    const [userLogin, setUserLogin] = useState({
        values: {
            email: '',
            password: '',
        },
        errors: {
            email: '',
            password: ''
        },
        valid: false,
        isLogin: false
    })

    


    let handleChange = (e) => {
        let errorMessage = '';
        let { name, value } = e.target;

        // console.log('Name: ',name,' Value: ',value);
        if (value.trim() === "") {
            if (name === 'email') {
                errorMessage = "You have to type email";
            }

            if (name === 'password') {
                errorMessage = "You have to type password";
            }
        }

        let newValues = { ...userLogin.values, [name]: value };
        let newErros = { ...userLogin.errors, [name]: errorMessage };

        setUserLogin({
            ...userLogin,
            values: newValues,
            errors: newErros
        })


    }

    let checkValid = () => {
        let initValid = true;
        for (let key in userLogin.errors) {
            if (userLogin.errors[key] !== "" || userLogin.values[key] === "") {
                initValid = false;
            }
        }
        setUserLogin({ ...userLogin, valid: initValid });
    }

    useEffect(() => {
        checkValid();
    }, [userLogin.errors]);

    let handleSubmitUser = (e) => {
        e.preventDefault();

        userLoginService.Login(userLogin.values).then(res => {
            console.log(res.data)
            localStorage.setItem('email', userLogin.values.email);
            localStorage.setItem('accessToken', res.data.token);
            localStorage.setItem('avatar', res.data.avatar);

            document.querySelector('#header .login-form').classList.remove('active');

            setUserLogin({ ...userLogin, isLogin: true })
            swal({
                title: "Login Successfully",
                text: "Welcome to Quynh My Store",
                icon: "success",
                button: "OK",
            })

        })
            .catch(err => {
                let stringNotify = `${err.response.data}`;
                swal(`${stringNotify}`);
            })
    }



    const onclickBtnMenu = () => {
        document.querySelector('#header #search-form').classList.toggle('active');
        document.querySelector('#header #login-form').classList.remove('active');
        document.querySelector('.contact-info').classList.remove('active');
        document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #information-user').classList.remove('active');
    }

    const onclickLoginForm = () => {
        if (localStorage.getItem('email')) {
            document.querySelector('#header #information-user').classList.toggle('active');
            document.querySelector('#header #login-form').classList.remove('active');
            document.querySelector('#header .search-form').classList.remove('active');
            document.querySelector('.contact-info').classList.remove('active');
            document.querySelector('.header .navbar').classList.remove('active');
        }
        else {
            document.querySelector('#header #login-form').classList.toggle('active');
            document.querySelector('#header .search-form').classList.remove('active');
            document.querySelector('.contact-info').classList.remove('active');
            document.querySelector('.header .navbar').classList.remove('active');
            document.querySelector('#header #information-user').classList.remove('active');
        }
    }

    const onClickInfoCloseBtn = () => {
        document.querySelector('.contact-info').classList.remove('active');
    }

    const onClickInfoBtn = () => {
        document.querySelector('.contact-info').classList.toggle('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #information-user').classList.remove('active');
    }


    const onClickMenuBtn = () => {

        document.querySelector('.header .navbar').classList.toggle('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('.contact-info').classList.remove('active');
        document.querySelector('#header #information-user').classList.remove('active');
    }

    const onClickCloseCart = () => {
        document.querySelector('.header #your-cart-main').classList.remove('active');
    }

    const onClickOpenCart = () => {
        document.querySelector('.header #your-cart-main').classList.toggle('active');
        document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('#header #information-user').classList.remove('active');
    }

    // window.onscroll = () => {
        
    //     // document.querySelector('.header #your-cart-main').classList.remove('active');

    // }


   

    const arrayProducts = useSelector(state => state.ProductsListProducer.listProducts);

    let arrayProductStorage = localStorage.getItem("Array_Products");


    

    const [cartProduct,setCarProduct] = useState({
        arrayList:[],
    })

    useEffect(() => {
        if (arrayProductStorage !== null) {
            var array = localStorage.getItem("Array_Products");
            array = JSON.parse(array);
           setCarProduct({...cartProduct,arrayList:array});
        }

        else {
            setCarProduct({...cartProduct,arrayList:arrayProducts});
        }

    }, [arrayProductStorage])

    let renderProductsInCart = () => {
        return cartProduct.arrayList.map((product,index) => {
            return <tr key={index} >
                <td>{index + 1}</td>
                <td className='img_td' ><img src={product.imgPro} /></td>
                <td>{product.name}</td>
                <td><button className='btnPlus'>+</button>{product.quantity}  <button className='btnSub'>-</button></td>
                <td>{product.price}</td>
                <td><i class="fa fa-trash-alt"></i></td>
            </tr>
        })
    }

    return (
        <>
            <div className='header' id='header'>
                <a href='#' className='logo' >Healthy<span>Food</span></a>

                <nav className='navbar' >
                    <a href='#home' >Home</a>
                    <a href='#about' >About</a>
                    <a href='#services' >Services</a>
                    <a href='#pricing' >Pricing</a>
                    <a href='#contact' >Contact</a>
                    <a href='blogs' >Blogs</a>
                </nav>

                <div className='icons' >
                    <div onClick={onClickMenuBtn} id='menu-btn' className='fas fa-bars' ></div>
                    <div onClick={onClickInfoBtn} id='info-btn' className='fas fa-info-circle' ></div>
                    <div onClick={onclickBtnMenu} id='search-btn' className='fas fa-search' ></div>
                    <div onClick={onclickLoginForm} id='login-btn' className='fas fa-user' ></div>
                </div>

                <form onSubmit={handleSubmitUser} action='' className='search-form' id='search-form' >
                    <input type='search' name="" placeholder='Search here...' id='search-box' />
                    <label for="search-box" className='fas fa-search' ></label>
                </form>

                <form onSubmit={handleSubmitUser} className='login-form' id='login-form' >
                    <h3>Login Form</h3>
                    <input onChange={handleChange} autocomplete="off" required='required' name='email' type='email' placeholder='Enter your email' className='box' />
                    <input onChange={handleChange} autocomplete="off" required='required' name='password' type='password' placeholder='Enter your password' className='box' />
                    <div className='flex' >
                        <input type='checkbox' name='' id='remember-me' />
                        <label for="remember-me">Remember me</label>
                        <a href='#'>Forgot password?</a>
                    </div>
                    {userLogin.valid ? <button type='submit' className='btn'>Login Now</button> : <button disabled className='btn3'>Login Now</button>}
                    <p>Don't have an account <a href='#'>Create new account!</a>  </p>
                </form>


                <div className='information-user' id='information-user'>

                    <div className='profile-user'>
                        <div className='image-user' >
                            <img src={localStorage.getItem('avatar')} />
                        </div>


                        <p>Hello,baoduong1011</p>


                    </div>

                    <div className='methods-user'>
                        <div className='method'>
                            <div className='do-methods' >
                                <i class="fa fa-cog"></i>
                                <a href='#' >Update</a>
                            </div>

                            <div className='title' >
                                <i class="fa fa-angle-double-right"></i>
                            </div>

                        </div>

                        <div className='method' >
                            <div className='do-methods' >
                                <i className="fa fa-cart-plus"></i>
                                <a href='#' >Cart</a>
                            </div>

                            <div onClick={onClickOpenCart} className='title' >
                                <i class="fa fa-angle-double-right"></i>
                            </div>

                        </div>

                        <div className='method' >
                            <div className='do-methods' >
                                <i className="fa fa-sign-out-alt"></i>
                                <a href='#' >Logout</a>
                            </div>

                            <div onClick={() => {
                                localStorage.clear();
                                swal({
                                    title: "Logout Successfull!",
                                    text: "See you again! : ) ",
                                    icon: "success",
                                    button: "OK",
                                })
                                setTimeout(function () {
                                    window.location.reload();
                                }, 2500)
                            }} className='title' >
                                <i class="fa fa-angle-double-right"></i>
                            </div>

                        </div>

                    </div>
                </div>

                <div id='your-cart-main' className='your-cart-main'>
                    <div className='btn-close' >
                        <div>

                        </div>

                        <div onClick={onClickCloseCart} >
                            <i class="fa fa-times"></i>
                        </div>


                    </div>

                    <div className='body-cart' >
                        <div className='cart' >
                        <table className='table-scroll small-first-col'>
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Method</th>
                                </tr>

                            </thead>

                            <tbody class="body-half-screen" >
                                {renderProductsInCart()};
                            </tbody>
                        </table>

                        <div className='total-main' >
                            <div>

                            </div>
                            <div>
                                <h3> <i class="fa fa-shopping-cart"></i> Total: $1290.00</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                  

                   
                </div>

            </div>

            <div className='contact-info' >
                <div onClick={onClickInfoCloseBtn} id='close-contact-info' className='fas fa-times' ></div>

                <div className='info'>
                    <i className='fas fa-phone'></i>
                    <h3>phone number</h3>
                    <p>0373162396</p>
                    <p>0964649392</p>
                </div>

                <div className='info'>
                    <i className='fas fa-envelope'></i>
                    <h3>email address</h3>
                    <p>baoduong101110@gmail.com</p>
                    <p>19520017@gm.uit.edu.vn</p>
                </div>

                <div className='info'>
                    <i class="fa fa-map-marker-alt"></i>
                    <h3>Office Address</h3>
                    <p>3 Hai Ba Trung Road, Ben Tre City , Ben Tre , Viet Nam</p>

                </div>

                <div className='share'>
                    <a href='#' className='fab fa-facebook-f' ></a>
                    <a href='#' className='fab fa-twitter' ></a>
                    <a href='#' className='fab fa-instagram' ></a>
                    <a href='#' className='fab fa-linkedin' ></a>
                </div>
            </div>




        </>

    )
}
