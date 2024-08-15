import { ICard } from '@/util/interface';
import cardFlip from '@/style/cardFlip.module.css';

export const CardFlip = ({ id, icon, title, description }: ICard) => {
    return (
        <>
            <div className={cardFlip.container}>
                <div className={`${cardFlip.front} ${cardFlip.side}`}>
                    <div className={cardFlip.content}>
                        <div className='inline-block self-center'>{icon}</div>
                        <p className='font-bold text-2xl mt-6'>{title}</p>
                    </div>
                </div>
                <div className={`${cardFlip.back} ${cardFlip.side}`}>
                    <div className={cardFlip.content}>
                        <p className='text-xl leading-8 text-justify'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
