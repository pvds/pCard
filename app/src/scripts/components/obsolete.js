// const markup = () => {
//     /**
//      * Setup markup snippet
//      * */
//     const markupDetail = `
//     <header id='contact-details-header'>
//         <div class='form-control has-image'>
//         <label for='contact-details-image-field'>
//             <img src='dist/images/${image}.jpg' width='64' height='64' srcset='dist/images/${image}@2x.jpg 2x'/>
//             <span id='edit-image-field' class='is-hidden'>${imageAction}<br/>photo</span>
//         <?php } ?>
//     </label>
//     <input disabled hidden id='contact-details-image-field' type='file'/>
//         </div>
//         <div class='form-control has-name'>
//         <input disabled id='contact-details-name-field' type='text' title='contact name' value='${contactData.name}'/>
//         </div>
//         <div class='form-control has-favorite'>
//         <label for='contact-details-favorite-field'>
//             <svg ${contactData.favorite ? 'hidden' : ''} class='icon-star-outline unchecked' data-name='Star outline' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><title>icons</title><path d='M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z' fill='#FFF'/></svg>
//             <svg ${contactData.favorite ? '' : 'hidden'} class='icon-star-filled checked' data-name='Star filled' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><title>icons</title><path d='M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z' fill='#676767'/></svg>
//         </label>
//         <input disabled hidden id='contact-details-favorite-field' name='contact-details-favorite' type='checkbox' ${contactData.favorite ? 'checked' : ''}/>
//     </div>
//     </header>
//     <div id='contact-details-phone' class='form-section'>
//         <div class='form-control'>
//             <div class='label-wrapper'>
//                 <label for='contact-details-phone-work-field'>work</label>
//             </div>
//             <div class='element-wrapper'>
//                 <input disabled id='contact-details-phone-work-field' type='tel' value='${contactData.phone.work}'/>
//             </div>
//         </div>
//         <div class='form-control'>
//             <div class='label-wrapper'>
//                 <label for='contact-details-phone-mobile-field'>mobile</label>
//             </div>
//             <div class='element-wrapper'>
//                 <input disabled id='contact-details-phone-mobile-field' type='tel' value='${contactData.phone.private}'/>
//             </div>
//         </div>
//         </div>
//         <div id='contact-details-mail' class='form-section'>
//             <div class='form-control'>
//                 <div class='label-wrapper'>
//                     <label for='contact-details-mail-work-field'>work</label>
//                 </div>
//                 <div class='element-wrapper'>
//                     <input disabled id='contact-details-mail-work-field' type='email' value='${contactData.mail.work}'/>
//                 </div>
//             </div>
//             <div class='form-control'>
//                 <div class='label-wrapper'>
//                     <label for='contact-details-mail-private-field'>private</label>
//                 </div>
//                 <div class='element-wrapper'>
//                     <input disabled id='contact-details-mail-private-field' type='email' value='${contactData.mail.private}'/>
//                 </div>
//             </div>
//         </div>
//         <div id='contact-details-address' class='form-section'>
//             <div class='form-control'>
//                 <div class='label-wrapper'>
//                     <label for='contact-details-address-field-line-1'>home</label>
//                 </div>
//                 <div class='element-wrapper'>
//                     <input disabled id='contact-details-address-field-line-1' title='street and housenumber' type='text' value='${contactData.address.street}'/>
//                 </div>
//                 <div class='element-wrapper'>
//                     <input disabled id='contact-details-address-field-line-2' title='city' type='text' value='${contactData.address.city}'/>
//                 </div>
//                 <div class='element-wrapper'>
//                     <input disabled id='contact-details-address-field-line-3' title='country' type='text' value='${contactData.address.country}'/>
//                 </div>
//             </div>
//         </div>
//         <div id='contact-details-note' class='form-section'>
//             <div class='label-wrapper'>
//                 <label for='contact-details-note-field'>note</label>
//             </div>
//             <div class='element-wrapper'>
//             <textarea disabled id='contact-details-note-field'>${note}</textarea>
//         </div>
//     </div>`;
//
//     /**
//      * Replace current form with markup form
//      * */
//     const detailsWrap = document.getElementById('contact-details-wrap');
//     const detailsFormCurrent = detailsWrap.querySelector('form#contact-details');
//
//     /* Keep DOM from repainting every individual element */
//     const detailsFormFragment = document.createDocumentFragment();
//
//     /* Rebuild form element in DOM */
//     const detailsFormNew = document.createElement('form');
//     detailsFormNew.id = 'contact-details';
//     detailsFormNew.className = 'read-mode';
//     detailsFormNew.innerHTML = markupDetail;
//
//     /* Append new form element to fragment */
//     detailsFormFragment.appendChild(detailsFormNew);
//     detailsWrap.replaceChild(detailsFormNew, detailsFormCurrent);
//
//     /* Set global form node variable to new form node */
//     pcard.form.element = detailsFormNew;
// };
