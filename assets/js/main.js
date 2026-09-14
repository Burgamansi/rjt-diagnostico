/* ================================================================
   RJT Consultoria Empresarial â Landing Page V1
   Site: diagnostico.rjtconsultoria.com.br
   Vanilla JS â substitui dc-runtime/React (~330 KB removidos)
   ================================================================ */

(function () {
  'use strict';

  /* ------ Mobile menu ------ */
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  function toggleMenu() {
    mobileNav.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
  }
  function closeMenu() {
    mobileNav.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }

  burgerBtn.addEventListener('click', toggleMenu);
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ------ Back-to-top button ------ */
  var btnTop = document.getElementById('btn-top');
  var lastShowTop = false;

  window.addEventListener('scroll', function () {
    var show = window.scrollY > 600;
    if (show !== lastShowTop) {
      lastShowTop = show;
      btnTop.classList.toggle('visible', show);
    }
  }, { passive: true });

  btnTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ------ Modal (diagnÃ³stico) ------ */
  var modal = document.getElementById('modal-diagnostico');

  function openModal() { modal.classList.add('open'); }
  function closeModal() { modal.classList.remove('open'); }

  document.getElementById('btn-open-modal').addEventListener('click', openModal);
  modal.querySelectorAll('[data-close-modal]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  /* ------ Escape key ------ */
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeMenu();
    }
  });

  /* ------ Form validation & submission ------ */
  var form = document.getElementById('form-avaliacao');
  var msgEl = document.getElementById('form-msg');

  function validate(f) {
    var rules = [
      ['nome', 'Nome completo', function (v) { return v.trim().length >= 3; }],
      ['empresa', 'Empresa', function (v) { return v.trim().length >= 2; }],
      ['cargo', 'Cargo', function (v) { return v.trim().length >= 2; }],
      ['email', 'E-mail profissional', function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()); }],
      ['whatsapp', 'WhatsApp', function (v) { return v.replace(/\D/g, '').length >= 10; }],
      ['necessidade', 'Principal necessidade', function (v) { return v !== ''; }]
    ];
    var bad = [];
    rules.forEach(function (r) {
      var el = f.elements[r[0]];
      if (!el || !r[2](el.value)) bad.push(r[1]);
    });
    if (!f.elements.consent.checked) bad.push('AutorizaÃ§Ã£o de contato');
    return bad;
  }

  function showMsg(text, ok) {
    msgEl.textContent = text;
    msgEl.style.display = 'block';
    msgEl.style.background = ok ? '#eef7fd' : '#fef4f4';
    msgEl.style.color = ok ? '#13233d' : '#9f2f2f';
    msgEl.style.borderColor = ok ? '#bfd9ee' : '#f1c9c9';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var faltando = validate(form);
    if (faltando.length) {
      showMsg('Revise os campos: ' + faltando.join(', ') + '.', false);
    } else {
      showMsg(
        'FormulÃ¡rio em fase de integraÃ§Ã£o. Seus dados nÃ£o foram enviados â para falar agora use o WhatsApp ou o telefone abaixo.',
        true
      );
    }
  });
})();
