const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative overflow-hidden mb-16 sm:my-28 ${props.className || ""}`}
    >
        {/* Wave Effect Using CSS Pseudo-Element */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-white">
            <div className="w-full h-full bg-white wave-pattern"></div>
        </div>

        {/* Main Gradient Background */}
        <div
            className="absolute inset-0 w-full h-full blur-[200px] opacity-70 pointer-events-none"
            style={{
                background:
                    "linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)",
            }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export default GradientWrapper;
