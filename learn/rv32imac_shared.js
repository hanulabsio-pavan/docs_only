/* ===================================================================
   RV32IMAC interview track — shared behaviour
   Tabs, quizzes and side-nav scroll spy. Loaded by every lesson page.
   Markup contract:
     <div class="tabs"><div class="tabbar">
        <button data-t="id1">Label</button> ...
     </div>
     <div class="tabpane" id="id1"> ... </div> ... </div>

     <div class="quiz" data-a="2">
       <div class="q">Question</div>
       <button class="opt" data-fb="why">Option</button> ...
       <div class="fb"></div>
     </div>
   =================================================================== */
(function () {
  'use strict';

  function initTabs(root) {
    root.querySelectorAll('.tabs').forEach(function (box) {
      var bar = box.querySelector('.tabbar');
      if (!bar) return;
      var btns = Array.prototype.slice.call(bar.querySelectorAll('button'));
      var panes = Array.prototype.slice.call(box.querySelectorAll('.tabpane'));

      function show(id) {
        btns.forEach(function (b) { b.classList.toggle('on', b.dataset.t === id); });
        panes.forEach(function (p) { p.classList.toggle('on', p.id === id); });
      }
      btns.forEach(function (b) {
        b.addEventListener('click', function () { show(b.dataset.t); });
      });
      if (btns.length) show(btns[0].dataset.t);
    });
  }

  function initQuiz(root) {
    root.querySelectorAll('.quiz').forEach(function (q) {
      var answer = parseInt(q.dataset.a, 10);
      var opts = Array.prototype.slice.call(q.querySelectorAll('.opt'));
      var fb = q.querySelector('.fb');
      opts.forEach(function (o, i) {
        o.addEventListener('click', function () {
          if (q.dataset.done === '1') return;
          q.dataset.done = '1';
          opts.forEach(function (x, j) {
            if (j === answer) x.classList.add('correct');
          });
          if (i !== answer) o.classList.add('wrong');
          if (fb) {
            fb.textContent = (i === answer ? '✓ Correct. ' : '✗ Not quite. ')
              + (opts[answer].dataset.fb || '');
            fb.classList.add('show');
          }
        });
      });
    });
  }

  function initSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('nav.side a[href^="#"]'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var secs = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!secs.length) return;

    // Track visibility per section, then pick the single topmost visible one.
    // Acting per-entry inside the callback can leave two links highlighted
    // when several sections change state in the same batch.
    var visible = Object.create(null);

    function repaint() {
      var best = null, bestTop = Infinity;
      secs.forEach(function (s) {
        if (!visible[s.id]) return;
        var top = s.getBoundingClientRect().top;
        if (top < bestTop) { bestTop = top; best = s.id; }
      });
      links.forEach(function (a) {
        a.classList.toggle('active', best !== null && a === map[best]);
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      repaint();
    }, { rootMargin: '0px 0px -75% 0px', threshold: 0 });
    secs.forEach(function (s) { io.observe(s); });
  }

  function boot() {
    initTabs(document);
    initQuiz(document);
    initSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
