import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const VIDEO_IDS = [
  {id: 'dunJAgv1No8', name: 'Justin Brooke'},
  {id: '_83W6d33OJQ', name: 'David Dutton'},
  {id: 'Zw4HAPh9wLw', name: 'Tim Paulson'},
  {id: 'Nl2D6dLBMb0', name: 'Scott Smith'},
  {id: 'DR2235YB3RM', name: 'Paul Halme'},
  {id: 'diX_J4YjHPo', name: "Aaron O'Sullivan"},
];

const Testimonials: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className="w-full bg-[#0d1020] px-4 py-16 md:py-24 lg:px-8">
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">What clients say</h2>
        <p className="mb-10 text-center text-sm text-[#9bbcff]">
          Video testimonials from real clients and colleagues
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_IDS.map(({id, name}) => (
            <div
              className="overflow-hidden rounded-2xl border border-[#252a3d] bg-[#171923]"
              key={id}
              style={{boxShadow: '0 16px 48px rgba(0,0,0,0.4)'}}>
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`${name} testimonial`}
                />
              </div>
              <p className="px-4 py-3 text-center text-sm font-medium text-[#9bbcff]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

export default Testimonials;
