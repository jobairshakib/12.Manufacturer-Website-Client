import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <>
        <footer class="footer p-10 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>PC Manaia<br/>Providing reliable tech since 1992</p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
        </>
    );
};

export default Footer;