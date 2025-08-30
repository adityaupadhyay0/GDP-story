import { useEffect } from 'react';

const EventsTimeline: React.FC = () => {
  useEffect(() => {
    const timelineData = {
      title: {
        text: {
          headline: 'The Pioneer\'s Path',
          text: '<p>Follow the journey of a Growth Driven Pioneer through our flagship events.</p>',
        },
      },
      events: [
        {
          start_date: {
            year: '2023',
            month: '10',
          },
          text: {
            headline: 'VisionCraft - The Genesis',
            text: '<p>Our first major UI/UX design bootcamp. This 2-day event introduced aspiring designers to the fundamentals of creating beautiful and functional user interfaces. It was the first step for many on their design journey.</p>',
          },
          media: {
            url: 'https://lh3.google.com/u/2/d/1FY4HJQ8rsPEt_otYcXDd51Vm4RamLDoH=w4000-h8220-iv1',
            caption: 'VisionCraft event banner.',
          },
        },
        {
          start_date: {
            year: '2024',
            month: '01',
          },
          text: {
            headline: 'CodeStruct - Weekly Challenges',
            text: '<p>A weekly coding contest series designed to sharpen problem-solving skills with real-world scenarios. More than just DSA, CodeStruct helps participants think like engineers.</p>',
          },
          media: {
            url: 'https://lh3.google.com/u/2/d/1bUoKmrDrZsNON-ikcqYOJoitPZbwSWNj=w1868-h925-iv1',
            caption: 'CodeStruct announcement.',
          },
        },
        {
          start_date: {
            year: '2024',
            month: '04',
          },
          text: {
            headline: 'InkSpace - The Creative Hub',
            text: '<p>A space for technical writing, documentation, and sharing knowledge. InkSpace encourages clear communication and the art of explaining complex topics simply.</p>',
          },
          media: {
            url: '/public/bag.png',
            caption: 'InkSpace logo.',
          },
        },
        {
          start_date: {
            year: '2024',
            month: '08',
          },
          text: {
            headline: 'More to Come...',
            text: '<p>Our journey is just beginning. Stay tuned for more events, workshops, and opportunities to grow with us.</p>',
          },
        },
      ],
    };

    // This is a workaround for the TimelineJS library not being a native React component.
    // We check if the window object is available to avoid SSR errors.
    if (typeof window !== 'undefined') {
      const { Timeline } = require('@knight-lab/timelinejs');
      new Timeline('timeline-embed', timelineData);
    }
  }, []);

  return (
    <section className="py-20 bg-white" id="events">
      <div className="container mx-auto px-4">
        <div id="timeline-embed" style={{ width: '100%', height: '600px' }} />
      </div>
    </section>
  );
};

export default EventsTimeline;
