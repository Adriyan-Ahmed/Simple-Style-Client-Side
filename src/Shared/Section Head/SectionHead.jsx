const SectionHead = ({SubTitle, Title, Description}) => {
    return (
        <>
            <div>
                <div className=" text-center md:w-[500px] xl:w-[600px] mx-auto">
                    <h5 className="text-base md:text-lg xl:text-xl font-semibold text-[#F95442] ">{SubTitle}</h5>
                    <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-4xl xl:leading-normal font-bold mt-4 mb-6 w-max mx-auto ">{Title}</h1>
                    <p className="text-sm md:text-sm xl:text-base font-medium text-gray-500 leading-relaxed">{Description}</p>
                </div>
            </div>
        </>
    );
};

export default SectionHead;