const sources = {
  paper: "https://arxiv.org/abs/2601.02371v2",
  specification: "https://github.com/las-wg/agent-permissions.json",
  python: "https://github.com/las-wg/agent-permissions-python",
  playground: "https://agent-permissions-tools.vercel.app/",
  demo: "https://github.com/las-wg/agent-permissions-python/blob/main/samples/browseruse_integration.py",
};

export default function LeadershipActivities() {
  return (
    <section id="leadership-and-activities" aria-labelledby="leadership-title" className="leadership-section">
      <h1 id="leadership-title">Leadership and activities</h1>

      <div className="leadership-intro">
        <div className="leadership-team">
          <div>
            <h2>Samuele Marro</h2>
            <p className="leadership-role">Founder and chair</p>
          </div>
          <div>
            <h2>Jesse Wright</h2>
            <p className="leadership-role">Co-chair</p>
          </div>
          <div>
            <h2>Nuno Campos</h2>
            <p className="leadership-role">Co-chair</p>
          </div>
        </div>
        <div className="leadership-description">
          <p>
            Samuele founded LAS-WG in March 2025 alongside Jesse Wright and Nuno Campos.
            He runs the meetings, sets the technical agenda, and coordinates contributors
            and specifications. His chair role
            is unpaid and undertaken outside his employment, commercial responsibilities
            and doctoral duties.
          </p>
          <p>
            His work includes scoping proposals, introducing the web-agent permissions
            proposal, and developing the specification’s default-permission rules.
          </p>
          <p>
            Jesse and Nuno help run meetings and deputise for Samuele as chair when
            needed. Jesse provides focused advice on standards, while Nuno
            provides focused advice on agent companies.
          </p>
        </div>
      </div>

      <div id="outputs" className="leadership-outputs">
        <h2>Outputs</h2>
        <article className="leadership-output">
          <span className="leadership-label">Paper</span>
          <h3><a href={sources.paper}>Permission Manifests for Web Agents</a></h3>
          <p>
            Introduces a lightweight way for websites to describe permitted agent
            interactions and point agents to available APIs. Co-authored by Samuele
            Marro and 14 collaborators.
          </p>
          <details>
            <summary>All paper authors</summary>
            <p>
              Samuele Marro, Alan Chan, Xinxing Ren, Lewis Hammond, Jesse Wright,
              Gurjyot Wanga, Tiziano Piccardi, Nuno Campos, Tobin South, Jialin Yu,
              Sunando Sengupta, Eric Sommerlade, Alex Pentland, Philip Torr and Jiaxin Pei.
            </p>
          </details>
        </article>

        <article className="leadership-output">
          <h3><a href={sources.specification}><code>agent-permissions.json</code></a></h3>
          <p>
            A machine-readable format for interaction rules, action guidelines and
            API references. The repository labels it work in progress.
          </p>
          <a className="leadership-small-link" href={`${sources.specification}/commits/main/`}>Specification history</a>
        </article>

        <article className="leadership-output">
          <span className="leadership-label">Tools</span>
          <h3>Trying permission manifests</h3>
          <ul>
            <li>
              The <a href={sources.python}>Python library</a> discovers, fetches and
              validates manifests, and checks proposed interactions against resource rules.
              Includes a <a href={sources.demo}>browser-agent integration demo</a>.
            </li>
            <li>
              The <a href={sources.playground}>permissions playground</a> provides
              tools to build, generate and explain manifest files.
            </li>
          </ul>
        </article>
      </div>

    </section>
  );
}
