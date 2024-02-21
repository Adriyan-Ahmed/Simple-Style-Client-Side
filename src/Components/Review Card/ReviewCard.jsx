const ReviewCard = ({cardinfo}) => {
    console.log(cardinfo);
    return (
        <>
            <div className="">
                <h1 className="text-lg md:text-xl">{cardinfo.Title}</h1>
                <div className="">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" checked />
                    </div>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 ">{cardinfo.details}</p>
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-12 h-12 rounded-full" src={cardinfo.img} alt="User Profile Picture" />
                    </div>
                    <div>
                        <h1 className="text-sm md:text-base font-bold ">{cardinfo.auther}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;