import StickyMobileCTA from '../StickyMobileCTA';

export default function StickyMobileCTAExample() {
  return (
    <div className="h-[200vh] bg-muted/20 p-4">
      <p className="text-center py-20">Scroll down to see the sticky CTA appear</p>
      <StickyMobileCTA onCTAClick={() => console.log('Sticky CTA clicked')} />
    </div>
  );
}
