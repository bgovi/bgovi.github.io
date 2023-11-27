<template>
<div>

<p>Master Data Management</p>

Master Data Management (MDM) is a method of managing an organization's critical data. 
A Master Data Management system is a comprehensive solution designed to create and maintain a single, 
consistent, accurate, and complete version of master data across an enterprise. 
Master data refers to the foundational data shared across an organization, 
such as customer information, product data, employee records, and more.

Bureacuray driven engineering:

The primary goals of an MDM system are to ensure data consistency, 
eliminate duplicates, and provide a unified and authoritative source for master data. 
It involves processes, governance, policies, standards, and tools that help organizations manage and 
control their master data. MDM systems typically include features like data profiling, data quality management, 
data integration, and data governance to achieve these objectives.

By implementing a Master Data Management system, organizations can improve data quality, 
enhance decision-making processes, reduce errors and inefficiencies, comply with regulatory 
requirements, and gain a unified view of their business-critical information. This centralized and 
standardized approach to managing master data is essential for businesses operating in complex and 
dynamic environments, helping them maintain a competitive edge and adapt to changing market conditions.

Main Scope of Problem:

A problem that if only built once would already be solved.
Merger and acquisitions. Whos the owner whats correct. how to handle
conflicts. Data changes. Schemas change and usage changes. 

Technical Issues:
UI users.
API users.
ML/AI users.
Analytics users.
Database Developers:
Backup and recovery
logging

<p>Choice of Database</p>
  Neo4j or other graph based database
  JSON or xyz
  Postgres with Json

  more flexibility with data structure and insert/update/delete speed
    less query power

<p>Tools</p>
  UI engine ()
    subdomain virtulization.
  API ()
  JWT ()

<p>As of Query (insert only)</p>
  https://www.cybertec-postgresql.com/en/implementing-as-of-queries-in-postgresql/

<p>Trigger functions and tracking schemas.</p>

<p>RLS and current settings</p>
As a function for direct connections.
Query injection vs where predicate

<p>Direct connections and event triggers</p>
Controlling what users area allowed to do and how.
enforcing documentation. 


<p>Data Refactoring</p>

<p>Historical Record and Archive: The timeline merge commit only</p>
  Forward only. Data reversions vs structure reversions.
  Adding columns, tables, views and connections (low thought)
    Data Normalizations

<p>Conditional Crud Operations</p>

<p>Data Staging, Permissions and Notifications</p>

<p>Multistatement CTE: everything is obvious</p>

<p>Query and Storage</p>

<p>Syncing Columnar Store</p>

<p>Schema and api versioning</p>
  Dependency graph

<p>Conclusion: </p>
  <p>Quick Depolyments and Rebuilds</p>


</div>

</template>
