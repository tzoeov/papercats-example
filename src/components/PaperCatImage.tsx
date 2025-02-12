import { renderToStaticMarkup } from "react-dom/server";

interface IPaperCatImage {
  id?: number,
  body?: string,
  lines?: string,
  background?: string,
  heart?: string
};

export function RenderedPaperCatImage({
  id,
  height,
  paperCatImage
}: { id?: string, height?: string, paperCatImage?: IPaperCatImage }) {
  const rendered = renderToStaticMarkup(
    <PaperCatImage 
      background={paperCatImage ? paperCatImage.background : undefined}
      heart={paperCatImage ? paperCatImage.heart : undefined}
      lines={paperCatImage ? paperCatImage.lines : undefined}
      body={paperCatImage ? paperCatImage.body : undefined}
    />
  );
  const dataUri = `data:image/svg+xml;base64,${btoa(rendered)}`;
  return (
    <img src={dataUri} alt={id} height={height} />
  )
};

export function PaperCatImage({
  id,
  body = '#FFFFFF',
  lines = '#222222',
  background = '#FFFFFF',
  heart = '#FFFFFF'
}: IPaperCatImage) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1008 1008"
      style={ { backgroundColor: background }}
    >
      <path 
        className="body" 
        fill={body} 
        d="M906.4,1008L776.5,674.5l76.7-104.9l10.9-189.4l-118.9-288l-142.6-36l-56.2,144l-98.8-3.1l-67.9-133l-128,42.2
        l-26.2,155l-57.9,133l7.8,169.1l93.9,143L167.6,1008H906.4z M408.7,723l66.8,43.8l50.5-50l62.7,64.1L478.2,899.2L360.1,793.5
        L408.7,723z"
      />
      <path 
        className="heart"
        d="M 469.737 763.826 C 473.451 761.927 476.505 759.615 478.981 756.232 C 480.962 753.509 483.769 751.28 486.574 749.382 C 493.424 744.761 498.541 738.24 505.061 733.288 C 512.489 727.594 521.98 728.336 529.325 733.783 C 535.763 738.57 540.962 744.761 546.658 750.371 C 554.334 757.965 561.596 765.888 569.271 773.481 C 574.471 778.598 577.03 784.954 577.938 792.052 C 578.268 794.94 577.36 797.746 575.709 800.221 C 572.738 804.596 569.849 808.888 565.31 812.189 C 561.926 814.665 559.863 818.956 557.552 822.588 C 552.105 831.254 544.43 837.939 537.579 845.284 C 533.205 849.906 528.335 854.116 524.126 858.902 C 513.644 870.87 502.751 882.423 490.288 892.411 C 484.51 897.033 478.816 900.581 471.141 899.921 C 468.995 899.757 467.097 899.013 465.528 897.693 C 452.653 887.295 440.686 875.987 428.801 864.515 C 424.922 860.718 419.805 858.324 415.844 854.363 C 407.838 846.275 399.833 838.352 391.91 830.263 C 390.753 829.025 375.32 814.996 370.533 807.484 C 367.397 802.45 367.727 795.187 370.946 790.153 C 374.164 785.118 377.961 780.415 380.52 774.885 C 381.181 773.564 382.252 772.409 383.326 771.418 C 390.011 765.228 394.137 757.223 399.254 749.794 C 405.362 740.963 412.872 733.783 424.674 733.371 C 428.636 733.205 432.102 734.856 434.909 737.085 C 443.657 744.1 453.148 750.125 461.319 757.883 C 463.713 760.359 467.097 761.514 469.737 763.826 Z" 
        fill={heart}
      />
      <g>
        <path 
          className="outline outline--body" 
          fill={lines}
          d="M374.8,75.9c-8.9-2.1-16.6,2-24.6,3.2c-7.6,1.2-15.1,4.6-22.2,7.7c-9.2,4-18.9,6.4-28.3,9.9
          c-9.6,3.5-18.9,7.5-28,12.2c-3.9,2.1-5.8,6.8-10.3,8.4c-0.3,0.1-0.5,0.9-0.4,1.4c0.5,4.8-2,9-2.8,13.4c-2.4,12.9-4.4,25.9-6.3,38.9
          c-2.6,18.5-4.9,37-7.2,55.5c-1.6,12.8-4.2,25.7-10.6,37.6c-3,5.6-5.2,11.9-5.4,18.8c-0.2,6.6-3.7,12.7-6.6,18.5
          c-4.2,8.6-6.3,18-10.9,26.5c-3.9,7-6.8,14.6-10.2,21.9c-3,6.4-3.9,13.6-7.9,19.5c-1.3,2-1.9,4.1-1.9,6.5c0.1,4.8-3.3,8.2-5.3,12.1
          c-2.9,5.7-4.5,11.4-4,17.8c0.3,3.3,0.2,6.6-0.5,9.9c-1.2,5.4,0.3,10.8,0.4,16.2c0.3,8.8-1.4,17.8-0.6,26.6
          c0.9,9.9-0.1,19.9,1.5,29.7c0.5,3.2,0.1,6.6,0.2,10c0.5,12.1,3.5,24,4.3,36c0.8,10.8,4,21.1,4.6,31.8c0.1,1,0,1.9,0.8,2.8
          c6,6.6,9,15.3,14.7,22.2c2.6,3.1,2.7,8.2,5.8,11.3c3.5,3.5,6.2,7.8,9.5,11.5c9.5,10.2,18.1,21.1,26.3,32.2
          c10.6,14.3,23.6,26.6,34.3,40.8c3.2,4.2,4.9,8.8,5.1,14.9c0.4,11.4-5.4,20.3-8.7,30.2c-2.2,6.6-2,13.6-4.8,19.9
          c-1,2.4-1.6,5-2.9,7.3c-1.4,2.4-2.6,5-2.2,8c0.2,2.1-0.9,3.8-1.8,5.6c-3.2,6.5-4.8,13.6-7.4,20.2c-4.2,10.5-7.1,21.5-12,31.8
          c-3.7,7.7-5.8,16-7.5,24.3c-1.2,6.1-3.4,11.5-6,17c-2.7,5.6-5.1,11.4-6.8,17.5c-2.2,8-5.8,15.6-8.2,23.5
          c-2.6,8.8-6.7,17.1-8.2,26.2c-0.2,1.1-0.5,2.3-1.1,3.3c-4.5,8.7-6.2,18.6-11.1,27.1c-6.5,11.2-8.3,23.8-11.9,35.8
          c-0.2,0.8-0.6,1.6-0.8,2.4c-1.3,4.6-3.6,7-9.1,6.6c-7.6-0.6-15.3-0.1-23.3-0.1c3.2-10.5,4.6-21.1,9.1-30.9c2-4.4,3-9,4.5-13.6
          c2.7-8.5,6.8-16.4,10.8-24.3c1.5-3,1.2-6.6,2.5-9.5c6.6-14.7,8.8-31,16.1-45.4c1.4-2.8,0.5-6.5,2-8.5c5.1-6.8,4.7-15.6,9.3-22.6
          c2.2-3.3,3.2-7.6,4.2-11.5c2.5-9.7,5.2-19.3,9-28.6c4.4-10.7,7.9-21.7,11.4-32.8c3-9.3,5.6-18.8,10.4-27.7
          c2.8-5.1,4.1-11.5,5.1-17.4c1.3-7.6,3.7-14.6,6.7-21.5c1.1-2.6,1.8-5.3,2.3-8c1.3-6.6-4.1-10.2-7.4-14.2
          c-6.4-7.7-13.3-15.1-19.9-22.8c-7.7-9-14.4-18.8-22-27.9c-8.4-10.2-17.6-19.9-24.6-31.2c-4.5-7.2-8.7-14.6-12.8-22.1
          c-0.6-1.1-0.9-2.5-1.8-3.4c-5.6-5.7-6.7-12.9-7.3-20.4c-0.3-4.1-0.2-8.2-2.2-12c-0.7-1.3-1.4-3-1.1-4.2c1.3-6.1-0.7-11.7-2.1-17.5
          c-9.8-0.2-20,0.6-29.5,2.8c-9.9,2.3-18.9,0.1-28.2-0.7c-8.4-0.7-14.2-9-14.1-17.5c0.2-12.3,2.3-13.9,14-17.5
          c12.1-3.7,24.3-1,36.4-2.8c5.7-0.9,11.5-1.2,17.7-0.8c-0.1-5.6,0.6-11-1.3-16.4c-10.1,2.4-20.5,1-30.8,1.8
          c-6.7,0.5-13.9,0-20.8-0.7c-3.7-0.3-6.6-2.7-9.1-5.6c-10.9-12.8-4-26.1,7.7-31.4c0.6-0.3,1.2-0.6,1.9-0.6
          c7.6,0.2,15.2-1.9,22.7-1.7c9.6,0.3,18.9-2.8,29.1-1.1c0-10.4-0.1-20.2,0-29.9c0.1-5,0.7-10,0.9-15.1c0.1-1.2,0.3-2.3,0.9-3.3
          c6.4-12.2,10.5-25.3,14.6-38.5c1.4-4.4,4-8.6,5.9-12.9c5.2-11.5,10.3-23.1,15.3-34.7c4-9.2,7.8-18.4,11.2-27.9
          c0.8-2.4,1.6-4.7,1.2-7.2c-0.3-2.1,0.3-4,1.2-5.8c3.6-7,5.6-14.6,8.9-21.8c2.1-4.6,2.4-10.3,2.7-15.5c0.5-10.8,3-21.1,4.9-31.6
          c0.6-3.2,0.3-6.6,0.3-9.9c0-9.1,2.9-17.9,3.4-27c0.2-3.2,3.4-5.6,3.5-8.6c0.2-8.1,2.3-15.8,3.1-23.7c0.7-7.4,3.1-14.4,6-21.2
          c2-4.8,7.1-6.4,10.9-9.1c10.6-7.8,22-14.6,34.9-17.9c3.8-1,6.8-3.4,10.2-5c4.5-2.1,9.1-4,14.1-4.1c2.4,0,3.9-1.7,5.9-2.4
          c9.6-3.5,18.9-8,28.8-10.3c9.7-2.2,19.6-4,29.5-5.5c6.5-1,12.3-0.7,18.3,2c5.5,2.4,9.4,6.1,11.9,11.4c3.7,7.7,7.3,15.4,10.7,23.3
          c2.3,5.5,5.4,10.8,8.3,16.2c2.5,4.7,3.8,9.7,5.6,14.7c2.4,6.6,5.9,12.8,8,19.5c3.1,9.5,8.1,18.1,10.6,27.9c1.8,7,5.9,13.4,9.2,20
          c1,2.1,3.4,1.7,5.2,1.8c3.2,0.2,6.7,0.3,9.7,0c6.9-0.6,13.3,0.3,20.1,1.2c15,2,30.1,1.2,45.3,1.3c3.6,0,5.8-1.5,6.7-4.6
          c3-9.8,7.3-19.2,9.5-29.4c1.2-5.8,4.4-11.2,6.4-17c3.3-9.5,8.5-18.3,11.1-28.3c2-7.7,6.8-14.5,9.8-22c3.1-7.7,7.4-14.7,9.9-22.8
          c3.5-11.2,12.7-18.3,24.5-18.6c15-0.4,30-1.1,45.1,3.1c15.9,4.4,32,8.5,48.1,12.7c17,4.4,33,11,46.2,23.2
          c7.8,7.2,12.6,16.5,16.9,25.9c5.9,12.8,10.8,26.1,19.7,37.4c3.7,4.7,5.1,11,7.9,16.5c5.5,10.7,8.9,22.3,14.9,32.9
          c4.9,8.6,8.7,18,11.2,27.7c0.9,3.5,3.5,6.3,5,9.6c4.9,11.1,8.4,22.7,13.9,33.5c2.9,5.6,5.1,12.1,7.8,17.9
          c5.7,12.2,9,25.3,14.7,37.4c1.6,3.5,2.2,7.5,2.8,11.4c1.3,7.3,5,13.9,6.9,20.9c2.3,8.7,7.4,16.6,7.3,25.8
          c-0.1,8.8-0.7,17.7-1.2,26.5c-0.1,2-0.5,3.8,0.1,5.8c1.3,4.3-0.2,8.6-1,12.7c-1.2,6.8-1,13.5-0.9,20.3c0.1,12.7-0.1,25.3-1.7,37.9
          c-0.7,5,0.3,10.1,0.6,15.2c0,0.8,0.3,1.7,0.1,2.5c-2.5,11.8-3,23.8-4.1,35.8c-0.8,8.9-1.6,17.8-3.9,26.7
          c-2.5,9.9-7.4,17.5-12.9,25.5c-4.3,6.2-7.6,13-11.1,19.7c-2.9,5.4-7.2,9.9-10.8,14.8c-5.1,6.9-11,13.2-16.8,19.5
          c-2.7,3-3,7.4-6.4,9.9c-5.8,4.3-8.8,10.8-12.9,16.5c-1.3,1.9-3.1,3.4-4.8,5.4c6,12.1,10.4,24.9,16.1,37.2
          c5.4,11.6,10.2,23.4,15,35.3c1.5,3.8,4.1,7.2,5.9,10.9c2.6,5.5,3.4,11.6,6.7,16.9c6.2,9.8,8,21.4,12.9,31.8
          c4.9,10.4,8.7,21.2,12.9,31.9c2.3,5.8,3.5,12,6.1,17.7c6,13.5,8.8,28.2,13.6,42.1c1.8,5.2,5.2,9.5,6.7,14.8
          c2.2,7.7,7.4,14.4,7,22.9c-0.1,2.2,2,3.8,2.7,5.8c2.8,7.5,7.2,14.5,7.4,22.8c0,1.5,1.1,3,2.4,4.2c1.4,1.3,2.5,3,2.3,4.8
          c-0.6,5.4,2.2,9.6,4.6,13.9c3.4,6,3.7,13.3,9.4,18.2c-0.3,0.3-0.6,0.6-1,0.9c-9.9,0-19.8,0-29.8,0c-2.1,0-2.7-1.4-3.5-2.9
          c-3.3-5.4-4.5-11.6-6.3-17.6c-3.1-10.2-7.8-19.8-11.5-29.7c-1.4-3.7-3.1-7.2-2.8-11.4c0.2-2.3-0.7-4.6-1.8-6.5
          c-5.7-9.7-7.6-21.1-13.1-30.8c-5.6-10-5.5-21.6-10.2-31.8c-6.7-14.5-9.9-30.3-16.7-44.8c-2.4-5.2-3.4-11-6.8-15.7
          c-1.8-2.6-0.8-5.9-2.1-8.6c-4.5-9.1-7.5-18.8-11.8-28c-3.5-7.5-8.1-14.5-10.7-22.6c-1.6-5.2-5-9.8-7.1-14.8
          c-1.6-3.8-2.4-7.9-3.6-11.8c-0.6-1.9-1.1-3.9-2.3-5.4c-5.9-7.7-8.4-17-11.6-25.8c-1.8-5.1-3.7-9.6-7.5-13.5
          c-4.1-4.2-4.5-13.1-1.4-18.2c0.2-0.3,0.4-0.6,0.6-0.8c5.5-7.6,12.1-14.2,18-21.5c2.1-2.6,3.9-5.3,5.7-8.1
          c5.7-8.9,11.9-17.2,19.5-24.8c6.1-6.1,10.5-13.9,14.8-21.5c5.1-8.9,9.9-17.8,16.3-25.9c2.6-3.3,4.3-7.4,4.3-12.3
          c0-9.4,1.2-18.7,2.5-28.1c1-6.8,0.7-13.8,1.2-20.8c0.7-9.9,1.5-19.7,1.8-29.6c0.4-12.6-0.3-25.2,0.5-37.7c0.5-7.6,1-15.2,1.1-22.7
          c0.1-7.7,2.4-14.9,2.7-22.4c0.3-6.1-0.8-11.6-3.3-17.3c-4.6-10.5-7.6-21.6-10.7-32.5c-4.2-14.5-8.4-29.2-14.5-42.9
          c-5-11-8.2-22.9-15.9-32.7c-2.5-3.1-1.9-7.6-3.5-11.2c-2.5-5.7-4.3-11.8-7.6-17.1c-1.9-3.1-1.1-6.8-2.7-9.9
          c-4.6-8.9-7.8-18.4-12.2-27.4c-2.7-5.5-7-10.3-8.7-16.5c-2-7.4-5.7-13.9-9.3-20.5c-3.2-5.9-7-11.5-10.3-17.3
          c-4.1-7.3-7.4-15-10.2-22.8c-4.7-12.7-12.2-22.8-24.1-29.4c-5.1-2.8-10.8-3.9-16.2-5.9c-10.3-3.7-21.1-6.2-31.7-9.1
          c-7-1.9-14.2-3.7-21.3-5.8c-5.8-1.7-11.9-2.8-18.1-2.8c-1.8,0-3.7,0-5.5-0.3c-8.7-1.4-9.3-0.5-13.3,7.4
          c-4.4,8.8-7.2,18.1-11.7,26.9c-6.8,13.5-10.9,28.3-16.5,42.5c-3,7.5-4.8,15.3-8,22.6c-4.9,11-7.2,23.2-14.9,32.9
          c-5.1,6.5-12.1,10.2-20.2,11.1c-9.3,1.1-18.7-0.1-28,0.4c-6.4,0.3-12.5-1.3-18.6-1c-11,0.5-21.6-4.5-32.4-2.4
          c-7.4,1.4-14.1,0.2-20.8-2.1c-8.8-3-14.4-9.5-17.5-17.7c-3.3-8.7-6-17.7-10-26.1c-0.9-1.8-1.2-3.8-1.9-5.6
          c-4.8-11.8-10.1-23.4-14.3-35.5c-4.4-12.7-12.3-23.8-16.5-36.6C379,82.9,375.3,79.8,374.8,75.9z"
        />
        <path 
          className="outline outline--heart" 
          fill={lines}
          d="M471.5,748.2c4.5-2.3,8.2-5.1,11.2-9.2c2.4-3.3,5.8-6,9.2-8.3c8.3-5.6,14.5-13.5,22.4-19.5
          c9-6.9,20.5-6,29.4,0.6c7.8,5.8,14.1,13.3,21,20.1c9.3,9.2,18.1,18.8,27.4,28c6.3,6.2,9.4,13.9,10.5,22.5c0.4,3.5-0.7,6.9-2.7,9.9
          c-3.6,5.3-7.1,10.5-12.6,14.5c-4.1,3-6.6,8.2-9.4,12.6c-6.6,10.5-15.9,18.6-24.2,27.5c-5.3,5.6-11.2,10.7-16.3,16.5
          c-12.7,14.5-25.9,28.5-41,40.6c-7,5.6-13.9,9.9-23.2,9.1c-2.6-0.2-4.9-1.1-6.8-2.7c-15.6-12.6-30.1-26.3-44.5-40.2
          c-4.7-4.6-10.9-7.5-15.7-12.3c-9.7-9.8-19.4-19.4-29-29.2c-1.4-1.5-3.3-2.2-4.7-3.6c-7.6-7.5-15.4-14.9-21.2-24
          c-3.8-6.1-3.4-14.9,0.5-21s8.5-11.8,11.6-18.5c0.8-1.6,2.1-3,3.4-4.2c8.1-7.5,13.1-17.2,19.3-26.2c7.4-10.7,16.5-19.4,30.8-19.9
          c4.8-0.2,9,1.8,12.4,4.5c10.6,8.5,22.1,15.8,32,25.2C464.2,744,468.3,745.4,471.5,748.2z M415.9,739.6
          c-7.1,6.7-11.1,14.5-16.5,21.1c-6.4,7.8-11.9,16.3-17.5,24.7c-3.4,5.1-2.8,5.7,1.3,10.1c3,3.3,6.8,5.8,9.6,9.2
          c4.5,5.5,10.1,10.1,14.8,15.4c4.5,5.2,11.4,8.2,14.9,13.7c7.5,11.4,19.7,17.4,28.8,27c7.1,7.5,15.9,13.9,23.7,21.1
          c2.7,2.5,4.4,2.2,6.6,0c5.9-5.9,11.6-11.9,17.7-17.6c4.6-4.4,7.4-10.2,12.2-14.4c4-3.5,7.7-7.3,11.4-11.1
          c9.2-9.5,18.1-19.3,26.7-29.4c7-8.1,12.4-17.7,21-24.4c2.1-1.6,2.1-3.4,0.6-5.6c-4.1-6.5-8.8-12.6-15.3-16.8
          c-5.6-3.6-9-9.2-14-13.2c-4.9-3.9-7.3-10.3-12.8-13.5c-8.3,5.8-15.8,12.5-23,19.1s-15.4,11.9-22.3,18.8c-2.9,2.9-6.9,4.3-10.9,3.8
          c-8.4-1.1-16.2-4.7-22.2-10.3C439.8,757.2,426.2,750.5,415.9,739.6z"
        />
        <path 
          className="outline outline-mouth"
          fill={lines}
          d="M409.7,491.9c3.2-6.8,9.6-10.5,13.9-16.2c8.7-11.5,26.1-13.5,36.7-6.8c8.1,5.1,16.2,10.3,22.1,18.3
          c2.6,3.5,5.1,3,7.2-0.9c1.1-2.1,2.7-3.8,4.2-5.5c5.3-5.9,9-12.9,14-18.9c6.9-8.4,18.1-7.8,24.2-1.1c3.7,4.1,4.2,10.2,0.6,15.1
          c-5,6.8-10.4,13.2-15,20.3c-3.5,5.4-7.8,10-12.4,14.6c-10.9,11-23.7,9.4-35,0.2c-6.9-5.6-14.4-10.5-21-16.5
          c-2.7-2.5-5.3-0.2-6.5,1.9c-2,3.6-4.9,6.1-7.8,8.8c-3.1,2.8-5.8,5.8-8.5,8.9c-7.9,9.3-22.9,9.2-32.1,1.3
          c-6.9-5.9-12.6-13-19.9-18.4c-3.9-2.9-6.9-7-10.5-10.4c-4.4-4.2-4.7-9.7-1.8-14.5c3.2-5.2,10.5-8,16.6-6.3c1.4,0.4,3.1,0.8,4,1.8
          c5.6,5.8,13,9.6,17.9,16.2C402.7,486.7,405.3,489.5,409.7,491.9z"
        />
        <path 
          className="outline outline--eye outline--eye--right"
          fill={lines}
          d="M613.1,417.3c9.8,0.6,19.6,3.8,28.5,11.1c8.5,6.9,11.4,15.7,11.8,25.6c0.3,8.5-1.9,17.1-6.7,23.9
          c-6.6,9.2-15.6,15.8-27.5,17.5c-7.3,1-14.8,1.3-21.7-0.6c-9.6-2.6-17.4-8.9-22.1-17.8c-2.5-4.7-5.7-9.4-5.7-15.1
          c0-5.8-0.5-11.5,2.1-17.3c2-4.5,3-9.1,6.9-12.6C588.2,423.3,598.8,417.7,613.1,417.3z"
        />
        <path 
          className="outline outline--eye outline--eye--left"
          fill={lines}
          d="M295.4,417.6c15.8-2.8,29.9,14.5,32.7,27.3c1.9,8.6,0.5,16.8-1.4,24.9c-1.4,5.8-5.8,10.8-10.4,14.2
          c-5.8,4.3-12.7,7.6-20.6,6.5c-3-0.4-6.1,0.2-9.2,0.1c-10.6-0.3-18.1-5.9-25.8-12.1c-9.9-7.9-9.3-17.8-8.4-28.7
          c0.7-8.3,5.7-14.2,9.3-20.9c3.3-6.2,10.6-7.2,16.5-9C283.7,418.2,289.8,416.3,295.4,417.6z"
        />
        <path 
          className="outline outline--whisker outline--whisker--bottom"
          fill={lines}
          d="M750.1,533.4c-9.6-0.3-18.5-1.5-24.9-9.9c-4.2-5.5-4.7-11.6-2.7-17.3c2.2-6.2,7.1-10.7,14.2-11.7
          c10.4-1.4,20.9-1.6,31.5-2.1c8.1-0.4,16.1,0.7,24.2,0.2c3.8-0.3,7.1,1.3,9.8,4c4.1,4.4,7.3,9.4,7.3,15.6c0,9.1-9.1,18.1-18.2,18.1
          c-6.3,0-12.5,1.8-18.7,1.6C764.9,531.7,757.5,533.2,750.1,533.4z"
        />
        <path 
          className="outline outline--whisker outline--whisker--top"
          fill={lines}
          d="M723.7,458.6c0-11.2,7-17.4,19.3-18.2c10-0.6,20.1-0.9,29.8-3.7c1.1-0.3,2.3-0.1,3.5-0.2
          c5.9-0.6,11.6,1.3,17.5,1.7c9.8,0.7,15.5,8.3,15.9,18.5c0.4,10.5-3.1,13.9-12.9,16.8c-12.4,3.7-25,1.3-37.3,3
          c-5.6,0.8-11.2,0.9-16.8,0.9C730,477.2,723.7,471.1,723.7,458.6z"
        />
      </g>
    </svg>
  )
}