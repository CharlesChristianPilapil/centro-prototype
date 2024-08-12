const Map = ({
    height = '450',
    width = '600',
    className,
}: {
    height?: string;
    width?: string;
    className?: string;
}) => {
    return (
        <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1930.7691309636268!2d120.98521902495419!3d14.568377263327948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2eb6b6aaab%3A0x207a869a5a9a13c3!2sCPL%20Masters%20Recruitment%20Agency%20Inc!5e0!3m2!1sen!2sph!4v1723198241961!5m2!1sen!2sph'
            width={width}
            height={height}
            loading='lazy'
            className={`w-full mb-4 rounded ${className}`}
        ></iframe>
    );
};

export default Map;
