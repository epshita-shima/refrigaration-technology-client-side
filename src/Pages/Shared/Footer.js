import React from 'react';

const Footer = () => {
    return (
        <footer className='p-10 mt-16 bg-neutral text-neutral-content'>
            <div class="footer">
                <div>
                    <span class="footer-title">Information</span>
                    <a class="link link-hover">Specials</a>
                    <a class="link link-hover">New item</a>
                    <a class="link link-hover">Product offer</a>
                    <a class="link link-hover">Product review</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Site map</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title">My Account</span>
                    <a class="link link-hover">My account</a>
                    <a class="link link-hover">Login / register</a>
                    <a class="link link-hover">My orders</a>
                    <a class="link link-hover">My address</a>
                </div>
            </div>

            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;