(() => {
  // ⬇ paste your full helpcentersData array here, exactly as it was
const helpcentersData = [
            // DISA NORTE (11)
            { name: "USF Professor Carlson Gracie", district: "Norte", type: "USF", address: "Av. Curaçao, s/n", neighborhood: "Conjunto Cidadão V, Nova Cidade", hours: "Segunda a sexta, 8h às 17h", access: "Porta Aberta" },
            { name: "USF MJ PM Sálvio Belota", district: "Norte", type: "USF", address: "Rua Samambaia, 786", neighborhood: "Santa Etelvina", hours: "Seg. a sex., 7h às 20h; Sáb., 7h às 11h", access: "Porta Aberta" },
            { name: "USF Prefeito Manoel Henrique Ribeiro", district: "Norte", type: "USF", address: "Rua Leblon, s/n", neighborhood: "Conjunto Viver Melhor III, Cidade de Deus", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Dr. José Figliuolo", district: "Norte", type: "USF", address: "Rua Rio Maicuru, s/n", neighborhood: "Lago Azul / Conjunto Viver Melhor", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Arthur Virgílio Filho", district: "Norte", type: "USF", address: "Travessa Imbituba, 3015", neighborhood: "Amazonino Mendes, Novo Aleixo", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Carmen Nicolau", district: "Norte", type: "USF", address: "Rua Nestor Nascimento, s/n", neighborhood: "Lago Azul", hours: "Seg. a sex., 7h às 18h; Sáb./Dom., 8h às 17h", access: "Porta Aberta" },
            { name: "UBS Frei Valério di Carlo", district: "Norte", type: "UBS", address: "Rua Bom Jesus, s/n", neighborhood: "Novo Israel", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "UBS Armando Mendes", district: "Norte", type: "UBS", address: "Rua 5, s/n", neighborhood: "Conjunto Manoa, Cidade Nova I", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "Policlínica Enfª Anna Barreto Pereira", district: "Norte", type: "Policlínica", address: "Av. Grande Circular, s/n", neighborhood: "Monte Sião", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "Policlínica Dr. José Antônio da Silva", district: "Norte", type: "Policlínica", address: "Rua Aroeiras / Grumixava, 55", neighborhood: "Monte das Oliveiras", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "UBS Balbina Mestrinho", district: "Norte", type: "UBS", address: "Rua Major Silvério J. Nery (Rua 170)", neighborhood: "Cidade Nova, Núcleo 3", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },

            // DISA SUL (7)
            { name: "USF Petrópolis", district: "Sul", type: "USF", address: "Rua Delfim Afonso de Souza, s/n", neighborhood: "Petrópolis", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Dr. Luiz Montenegro", district: "Sul", type: "USF", address: "Rua Pico das Águas, 527", neighborhood: "Nossa Senhora das Graças", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Nilton Lins", district: "Sul", type: "USF", address: "Av. Prof. Nilton Lins, 2344 / Lote 3", neighborhood: "Flores / Parque das Laranjeiras", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Benedito Batista de Almeida", district: "Sul", type: "USF", address: "Rua Girassol, s/n", neighborhood: "São Francisco", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "UBS Theodomiro Garrido", district: "Sul", type: "UBS", address: "Rua São José, s/n", neighborhood: "Colônia Oliveira Machado", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "Policlínica Castelo Branco", district: "Sul", type: "Policlínica", address: "Rua do Comércio, s/n", neighborhood: "Parque 10 de Novembro", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF / Policlínica Dr. Antônio Reis", district: "Sul", type: "Policlínica", address: "Rua Escandinávia / São Luiz, s/n", neighborhood: "São Lázaro", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },

            // DISA LESTE (9)
            { name: "USF Mauazinho", district: "Leste", type: "USF", address: "Av. Rio Negro, 111 / 113", neighborhood: "Mauazinho", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Enfª Ivone Lima dos Santos", district: "Leste", type: "USF", address: "Rua Luís Corrente / Rua 8, s/n", neighborhood: "Coroado III", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Desembargador Fábio do Couto Valle", district: "Leste", type: "USF", address: "Av. Brigadeiro Hilário Gurjão, s/n", neighborhood: "Jorge Teixeira", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF José Amazonas Palhano", district: "Leste", type: "USF", address: "Rua Antônio Matias, s/n", neighborhood: "São José II", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Gebes de Melo Medeiros Filho", district: "Leste", type: "USF", address: "Rua Pirarucu, 100", neighborhood: "Jorge Teixeira", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Dr. Alfredo Campos", district: "Leste", type: "USF", address: "Av. Cosme Ferreira / Rua André Araújo", neighborhood: "Zumbi dos Palmares / Zumbi II", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Agnaldo Gomes da Costa", district: "Leste", type: "USF", address: "Rua Rio Pirarucu, 56", neighborhood: "São José", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Geraldo Magela", district: "Leste", type: "USF", address: "Rua Rio Envira, 442", neighborhood: "Armando Mendes", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "Policlínica Dr. Antônio Comte Telles", district: "Leste", type: "Policlínica", address: "Rua J / Barreirinha, s/n, Etapa B", neighborhood: "São José III / São José Operário", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },

            // DISA OESTE (7)
            { name: "Policlínica Dr. Djalma Batista", district: "Oeste", type: "Policlínica", address: "Rua 23 de Dezembro / Teotônio Vilela, s/n", neighborhood: "Compensa II / Compensa 3", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "USF Parque das Tribos", district: "Oeste", type: "USF", address: "Rua Piratapuia, 19", neighborhood: "Tarumã-Açú", hours: "Segunda a sexta, 7h às 16h", access: "Porta Aberta" },
            { name: "USF Ajuricaba", district: "Oeste", type: "USF", address: "Av. Leste, s/n", neighborhood: "Alvorada / Conjunto Ajuricaba", hours: "Segunda a sexta, 7h às 16h", access: "Porta Aberta" },
            { name: "USF Deodato de Miranda Leão", district: "Oeste", type: "USF", address: "Av. Presidente Dutra, s/n", neighborhood: "Glória", hours: "Seg. a sex., 7h às 20h; Sáb., 7h às 11h", access: "Porta Aberta" },
            { name: "Policlínica / CF Dr. José Raimundo Franco de Sá", district: "Oeste", type: "Policlínica", address: "Rua V, 150", neighborhood: "Nova Esperança 1", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "Módulo de Saúde da Família Vila da Prata", district: "Oeste", type: "USF", address: "Rua Ademar de Barros, s/n", neighborhood: "Vila da Prata", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "UBS Leonor de Freitas", district: "Oeste", type: "UBS", address: "Av. Brasil, 347", neighborhood: "Compensa I", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },

            // DISA RURAL (4)
            { name: "USFR Nossa Senhora Auxiliadora", district: "Rural", type: "Fluvial", address: "Calha do Rio Tarumã Grande", neighborhood: "Comunidade Ribeirinha Tarumã", hours: "Segunda a sexta, 8h às 16h", access: "Porta Aberta" },
            { name: "USFR / UBSR Pau Rosa", district: "Rural", type: "Terrestre", address: "Ramal do Pau Rosa, Km 21 (BR-174)", neighborhood: "Zona Rural BR-174", hours: "Segunda a sexta, 8h às 16h", access: "Porta Aberta" },
            { name: "UBSR São Pedro", district: "Rural", type: "Terrestre", address: "Rodovia AM-010, Km 35", neighborhood: "Zona Rural AM-010", hours: "Segunda a sexta, 8h às 16h", access: "Porta Aberta" },
            { name: "UBFR / UBSR Ephigênio Salles", district: "Rural", type: "Terrestre", address: "Rodovia AM-010, Km 41", neighborhood: "Zona Rural AM-010", hours: "Segunda a sexta, 8h às 16h", access: "Porta Aberta" },

            // REDE ESPECIALIZADA & RAPS (7)
            { name: "CAPS III AD Dr. Afrânio Soares", district: "Especializado", type: "CAPS AD", address: "Alameda Espanha, 5, Conjunto Jardim Espanha", neighborhood: "Aleixo", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "CAPS II AD Dra. Eliana V. Schramm", district: "Especializado", type: "CAPS AD", address: "Alameda Alphaville, s/n", neighborhood: "Tancredo Neves", hours: "Segunda a sexta, 7h às 17h", access: "Porta Aberta" },
            { name: "CAPSi Leste Dr. Rogelio Casado M. Filho", district: "Especializado", type: "CAPS Infanto-Juvenil", address: "Av. Adolpho Ducke, 1221, Conjunto Acariquara", neighborhood: "Coroado", hours: "Segunda a sexta, 7h às 17h (Até 18 anos)", access: "Porta Aberta" },
            { name: "CRDQ Ismael Abdel Aziz", district: "Especializado", type: "Centro de Reabilitação", address: "Rodovia AM-010, Km 53", neighborhood: "Zona Rural AM-010", hours: "Acolhimento Residencial Transitório", access: "SISREG" },
            { name: "FCecon (Fundação Centro de Controle de Oncologia)", district: "Especializado", type: "Hospital / Referência", address: "Rua Francisco Orellana, 215", neighborhood: "Planalto", hours: "Atendimento Especializado", access: "SISREG" },
            { name: "Policlínica Codajás (CER III / PAM Codajás)", district: "Especializado", type: "Policlínica Especializada", address: "Av. Codajás, 26", neighborhood: "Cachoeirinha", hours: "Consultas Especializadas", access: "SISREG" },
            { name: "Hospital Universitário Getúlio Vargas (HUGV/UFAM)", district: "Especializado", type: "Hospital Terciário", address: "Av. Apurinã, 4", neighborhood: "Praça 14 de Janeiro", hours: "Alta Complexidade", access: "SISREG" }
        ];

  const $ = id => document.getElementById(id);
  const search = $('fh-search'), accessSel = $('fh-access');
  const chips = $('fh-chips'), grid = $('fh-grid'), count = $('fh-count');
  let zone = 'all';

  const esc = s => String(s).replace(/[&<>"]/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function update() {
    const term = search.value.toLowerCase();
    const acc = accessSel.value;
    const data = helpcentersData.filter(i =>
      (zone === 'all' || i.district === zone) &&
      (acc === 'all' || i.access === acc) &&
      (i.name.toLowerCase().includes(term) ||
       i.neighborhood.toLowerCase().includes(term) ||
       i.address.toLowerCase().includes(term)));
    draw(data);
  }

  function draw(data) {
    count.textContent = `Exibindo ${data.length} de ${helpcentersData.length} centros`;
    if (!data.length) {
      grid.innerHTML = `<div class="fh-empty">Nenhuma unidade encontrada.
        <br><button type="button" id="fh-reset">Limpar filtros</button></div>`;
      return;
    }
    grid.innerHTML = data.map(i => `
      <div class="fh-card">
        <div class="fh-top">
          <span class="fh-badge fh-d-${i.district.toLowerCase()}">DISA ${esc(i.district.toUpperCase())}</span>
          <span class="fh-access ${i.access === 'Porta Aberta' ? 'open' : ''}">${esc(i.access)}</span>
        </div>
        <h3 class="fh-name">${esc(i.name)}</h3>
        <p class="fh-hood"> ${esc(i.neighborhood)}</p>
        <div class="fh-details">
          <p><strong>Endereço:</strong> ${esc(i.address)}</p>
          <p><strong>Horário:</strong> ${esc(i.hours)}</p>
        </div>
        <div class="fh-foot"><span>Tipo: ${esc(i.type)}</span><span class="fh-free">SUS Gratuito</span></div>
      </div>`).join('');
  }

  chips.addEventListener('click', e => {
    const b = e.target.closest('.fh-chip');
    if (!b) return;
    zone = b.dataset.zone;
    chips.querySelectorAll('.fh-chip').forEach(c => c.classList.toggle('active', c === b));
    update();
  });
  grid.addEventListener('click', e => {
    if (e.target.id !== 'fh-reset') return;
    search.value = ''; accessSel.value = 'all';
    chips.querySelector('[data-zone="all"]').click();
  });
  search.addEventListener('input', update);
  accessSel.addEventListener('change', update);

  update();
})();