import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineVisibility } from "react-icons/md";
import moment from 'moment';
import { BsSave } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {

    const { title, image_url, details, _id, rating, total_view, author } = news;

    return (
        <div className="card bg-base-100 border rounded mb-10">
            <div className='flex items-center justify-between bg-gray-100 p-4'>
                <div className='flex items-center gap-2'>
                    <img className='h-10 w-10 rounded-full' src={author.img} alt="" />
                    <div>
                        <p className='font-bold'>{author.name}</p>
                        <p>{moment().format('YYYY-M-D')}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-xl'>
                    <button><BsSave /></button>
                    <button><IoShareSocialOutline /></button>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <figure className='my-4'><img src={image_url} alt="Shoes" /></figure>
                <div className='pb-5 border-b'>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-red-600 font-bold'>Read more</Link></p> : <p>{details}</p>
                    }
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className="rating rating-sm rating-half p-0">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineVisibility />
                            {total_view}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object
}