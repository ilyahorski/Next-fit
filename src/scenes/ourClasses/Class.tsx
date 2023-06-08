import Image from 'next/image';
import { classes } from '@/data/classes';
import { ClassType } from '@/types';
import Carousel from 'react-multi-carousel';
import { useTranslations } from 'next-intl';

const Class = () => {
  const t = useTranslations('Our Classes');

  const overlayStyles = `p-5 absolute z-20 flex
  h-[350px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 dark:bg-secondary-300 text-center text-white
  opacity-0 transition duration-200 hover:opacity-90`;

  return (
    <div className='mt-10 h-[350px] w-full flex justify-between item-center'>
      <Carousel
        additionalTransfrom={0}
        arrows
        containerClass='w-full z-20'
        dotListClass=''
        draggable
        focusOnSelect={true}
        itemClass='flex justify-center'
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        minimumTouchDrag={80}
        partialVisbile={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
        responsive={{
          desktop_large: {
            breakpoint: {
              max: 3000,
              min: 1920,
            },
            items: 3,
          },
          desktop: {
            breakpoint: {
              max: 1919,
              min: 1500,
            },
            items: 3,
          },
          tablet: {
            breakpoint: {
              max: 1499,
              min: 1000,
            },
            items: 2,
          },
          mobile: {
            breakpoint: {
              max: 999,
              min: 0,
            },
            items: 1,
          },
        }}
      >
        {classes.map((item: ClassType, index) => (
          <div className='relative flex item-center justify-center mx-5 h-[350px] w-[450px]'
               key={`${item.name}-${index}`}>
            <div className={overlayStyles}>
              <p className='text-2xl'>{t(item.name)}</p>
              <p className='mt-5'>{t(item.description)}</p>
            </div>
            <Image width={450} height={350} quality={100} alt={`${item.image}`} src={item.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Class;
