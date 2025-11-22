import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SHANK3 Syndrome Treatment Information</title>
        <meta name="description" content="Information about SHANK3 syndrome treatments and interventions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">SHANK3 Syndrome Treatment Information</h1>

        <div className="content">
          <section className="section">
            <h2>What is SHANK3 Syndrome?</h2>
            <p>
              SHANK3 syndrome is a rare genetic disorder caused by mutations or deletions in the SHANK3 gene,
              which plays a crucial role in the formation and function of synapses in the brain. It is associated
              with autism spectrum disorder, intellectual disability, and speech delays.
            </p>
          </section>

          <section className="section">
            <h2>Current Treatment Approaches</h2>

            <div className="treatment-card">
              <h3>1. Early Intervention Therapies</h3>
              <ul>
                <li><strong>Speech and Language Therapy:</strong> Addresses communication delays and helps develop verbal and non-verbal communication skills</li>
                <li><strong>Occupational Therapy:</strong> Improves motor skills, sensory processing, and daily living activities</li>
                <li><strong>Physical Therapy:</strong> Helps with muscle tone issues and motor development</li>
                <li><strong>Behavioral Therapy (ABA):</strong> Applied Behavior Analysis can help with autism-related behaviors and skill development</li>
              </ul>
            </div>

            <div className="treatment-card">
              <h3>2. Educational Support</h3>
              <ul>
                <li>Individualized Education Programs (IEPs)</li>
                <li>Special education services</li>
                <li>Assistive communication devices</li>
                <li>Structured learning environments</li>
              </ul>
            </div>

            <div className="treatment-card">
              <h3>3. Medical Management</h3>
              <ul>
                <li><strong>Seizure Management:</strong> Anti-epileptic medications if seizures are present</li>
                <li><strong>Sleep Issues:</strong> Behavioral interventions and sometimes medication for sleep disturbances</li>
                <li><strong>Gastrointestinal Issues:</strong> Dietary modifications and medications as needed</li>
                <li><strong>Psychiatric Symptoms:</strong> Medication for anxiety, aggression, or other behavioral issues</li>
              </ul>
            </div>

            <div className="treatment-card">
              <h3>4. Research and Experimental Treatments</h3>
              <ul>
                <li><strong>IGF-1 (Insulin-like Growth Factor 1):</strong> Clinical trials have explored IGF-1 therapy with some promising results</li>
                <li><strong>Gene Therapy:</strong> Ongoing research into potential gene-based treatments</li>
                <li><strong>Targeted Drug Therapies:</strong> Research into compounds that may improve synaptic function</li>
                <li><strong>Clinical Trials:</strong> Multiple studies investigating potential therapeutic interventions</li>
              </ul>
            </div>

            <div className="treatment-card">
              <h3>5. Supportive Care</h3>
              <ul>
                <li>Family counseling and support groups</li>
                <li>Respite care services</li>
                <li>Nutritional support</li>
                <li>Social skills training</li>
                <li>Transition planning for adolescence and adulthood</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Important Considerations</h2>
            <div className="info-box">
              <p><strong>⚕️ No Cure Currently Exists:</strong> There is no cure for SHANK3 syndrome, but treatments can significantly improve quality of life and functional abilities.</p>
              <p><strong>🔬 Individualized Approach:</strong> Treatment plans should be tailored to each individual's specific symptoms and needs.</p>
              <p><strong>👨‍⚕️ Multidisciplinary Care:</strong> A team approach involving neurologists, developmental pediatricians, therapists, and other specialists is recommended.</p>
              <p><strong>📈 Early Intervention is Key:</strong> Starting therapies as early as possible can lead to better outcomes.</p>
            </div>
          </section>

          <section className="section">
            <h2>Resources and Support</h2>
            <ul>
              <li>Phelan-McDermid Syndrome Foundation</li>
              <li>Genetic counseling services</li>
              <li>University medical centers with expertise in rare genetic disorders</li>
              <li>Clinical trial registries (ClinicalTrials.gov)</li>
            </ul>
          </section>

          <div className="disclaimer">
            <p><strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. Always consult with qualified healthcare providers for diagnosis and treatment recommendations.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
