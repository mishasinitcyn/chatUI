import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-modal',
  template: `
    <div style="margin: 0; height: 70vh; overflow: auto;">
    <h2 nz-typography style="color:#b7eb8f;">Prompting Guide</h2>
    <p nz-typography>The system instructions and prompt format are primarily designed to answer questions with citations from the knowledge base.
      Each user message is directly used as a query to the vector database. Thus, I don't advise using traditionally conversational prompts with the system because it's better suited for direct question answering
      than for general conversation. In the future, I'd love to implement an agentic workflow that can independently make queries to the database.
    </p>

    
    <h2 nz-typography style="color:#b7eb8f;">Knowledge Base</h2>
    <p nz-typography>I specifically created this knowledge base from material studied in my Machine Learning class at Simon Fraser University, taught by Professor Mo Chen.
      This is the material that was covered in the course:     </p>

      <ul>
        <li> Math Prerequisites: Linear Algebra, Calculus, Probability</li>
        <li> Linear Regression </li>
        <li> Neural Networks </li>
        <li> SVMs </li>
        <li> Kernels </li>
      </ul>

      <p nz-typography>Notice that the following material, which is typically covered in a Machine Learning course, is not included in the knowledge base:</p>
    <ul>
      <li> Decision Trees </li>
      <li> Random Forests </li>
      <li> Boosting </li>
      <li> Clustering </li>
      <li> Dimensionality Reduction </li>
    </ul>

    Expanding the knowledge base to include these topics is certainly a future goal. If you would like to contribute, please reach out to me at msa242&#64;sfu.ca.
    


    <h2 nz-typography style="color:#b7eb8f;">Repository and Documentation</h2>
        <p nz-typography>The frontend and backend repositories, as well as the Jupyter notebooks used in the development process are available through the GitHub link above. <br>
          Likewise, full documentation of the application is available through the Medium link.</p>

    <h2 nz-typography style="color:#b7eb8f;">Licensing</h2>
    <p nz-typography>This project is entirely open-source and non-commercial. Thus, it is my understanding that I am legally allowed to host the textbook PDFs, 
      given that they are publicly available online. If you would like to send me a cease and desist, please send it to my email: msa242&#64;sfu.ca.</p>



    </div>
  `
})
export class FAQModalComponent {

}