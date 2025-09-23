const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} porto-ipuy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
