/**
 * Digital Business Card - Minimal JavaScript
 * Handles "Save Contact" button: downloads the vCard (.vcf) file.
 */

(function () {
  'use strict';

  var btnSave = document.getElementById('btn-save-contact');
  if (!btnSave) return;

  btnSave.addEventListener('click', function () {
    // Link to the pre-generated contact.vcf file
    var link = document.createElement('a');
    link.href = 'contact.vcf';
    link.download = 'contact.vcf';
    link.setAttribute('type', 'text/vcard');

    // Trigger download (works on mobile when file is same-origin or served with correct headers)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
})();
