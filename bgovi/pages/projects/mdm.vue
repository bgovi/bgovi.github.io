<template>
<div>

<section class="section" style="padding-bottom: 24px">
    <div class="container">
    <h1 class="title">Master Data Management (cFTE)</h1>
    </div>
</section>

<section class="section" style="padding-top: 0px;">
    <div class="container">
    <div class="content">
      <p class="subtitle"><strong>Main Scope of Problem</strong></p>

      <p>

      Master Data Management (MDM) is a method of managing an organization's critical data. 
      A Master Data Management system is a comprehensive solution designed to create and maintain a single, 
      consistent, accurate, and complete version of master data across an organization. Government and healthcare institutions provide
      a unique challenge for MDM systems as their workflows are often process driven based on current affairs. Correctly managing their data requires
      dynamic full stack frameworks that can quickly manage and implement complex workflows. These workflows can have user entry and visualization requirements based on
      time, location, employment and other fluid relationships.

      </p>

      <p><strong>Technical Requirements</strong></p>
      <ol>
        <li v-for="(tx, index) in tech_reqs" :key="index"> {{ tx }}</li>
      </ol>



    </div>
    </div>
</section>

<section class="section" style="padding-top: 0px; padding-bottom: 0px;">
    <div class="container">
    <h1 class="subtitle"><strong>cFTE Definitions</strong></h1>
      Clinical full-time effort (cFTE) typically refers to the amount of time a healthcare professional, such as a physician or researcher, 
      dedicates to clinical activities. It implies that the individual is engaged in clinical work on a full-time basis, which may 
      include patient care, consultations, procedures, and other clinical responsibilities. The specific definition can vary depending on 
      institutional or contractual agreements.
      <br>
      <br>
      A current data management issue in healthcare that rquires MDM like features is how to best maintain and update cFTEs.
      cFTEs are not strictly defined and there can be hundreds of definitions within an organizaiton. Each definition can be indepedently 
      assigned to a provider at different points in time. The individuals responsible for maintaining a given providers cFTE changes daily. 
      The cFTE system requires rules that can be quickly implmeneted to track responsibilities and accuracy of entered data. This cFTE information
      is often distributed at a system level to monitor productivity and distribute hospital resources to a department.
      Below are a few example calculations and their corresponding definitions.
      <br>
      <br>

    <div class="content">

      <p><strong>Definitions</strong></p>
      <ol>
        <li v-for="(cfte_def, index) in cfte_defs" :key="index"> {{ cfte_def.eqn }}</li>
      </ol>

      <p><strong>Description</strong></p>
      <ol>
        <li v-for="(cfte_def, index) in cfte_defs" :key="index"> {{ cfte_def.desc }}</li>
      </ol>

    </div>


    </div>
</section>




<section class="section" style="padding-bottom: 24px">
    <div class="container">
    <h1 class="subtitle"><strong>Data Schema Structure</strong></h1>

    <p style="padding-bottom: 24px">
      Below is an example structure of 
    </p>

    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block" style="max-width: 1000px">
                <img src="/img/projects/mdm/mdm.svg" alt="Centered image">
            </figure>
            </div>
    </div>


    <p style="padding-bottom: 24px">
      users:
      departments:
      department_employees:
      cfte_definitions:
      provider_effort


users: oauth_id (Managed by active directory)
  id, first_name, last_name, oauth_id, npi, employee_number, is_provider, is_manager, meta_data, valid, last_modified_by

departments
  id, name, valid, last_modified_by

department_employees
  id, user_id, department_id, start_date, end_date, valid, last_modified_by

cfte_definitions
  id, name, description, terms, valid, last_modified_by

provider_effort
  provider_id, effective_date, cfte_definition_id, valid, last_modified_by
    </p>



    </div>
</section>

<section class="section" style="padding-top: 0px">
    <div class="container">
    <div class="content">
      <p class="subtitle"><strong>Fast Apps</strong></p>
      <p >
        UI engine ()
        API ()
        component extensions, sql extensiosn. off by 1 scenarios.
        the cfte_definitions.definition stores a json file that maintains what is collected through
        apis and xyz.
      </p>
  </div>


    <!-- json -->
    <pre style="background: white;" >
        <code v-highlight class="json atom-one-dark">{{jsonx}}</code>
    </pre>


    <div class="content">
            <div class="has-text-centered">
            <figure class="image is-16x9 is-inline-block">
                <img src="/img/projects/mdm/UI_Generator.jpg" alt="Centered image">
            </figure>
            </div>
    </div>






    </div>
</section>


<section class="section" style="padding-top: 0px">
    <div class="container">
    <div class="content">
      <p class="subtitle"><strong>Time Travel, Row Level Security and Dynamic views</strong></p>
      <p>
        JWT
        As a function for direct connections.
        Query injection vs where predicate
        JWT ()
      </p>

      <p> A core component of an MDM system is the ability to time travel. Seeing how the state of data has 
        changed between iterations. This is achieved in postgres by changing the default behavior of 
        crud operations using views, indexes and triggers.
      </p>

    <!-- table creation -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{pe_table}}</code>
    </pre>

    <!-- current_effort -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{current_effort}}</code>
    </pre>

    <!-- versioning trigger -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{version_trigger}}</code>
    </pre>


    <!-- as of view -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{as_of_effort}}</code>
    </pre>

    <!-- rls crud statements -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{rls}}</code>
    </pre>


    <!-- trls crud statements -->
    <pre style="background: white;" >
        <code v-highlight class="pgsql atom-one-dark">{{trls}}</code>
    </pre>



    </div>
    </div>
</section>



<section class="section" style="padding-top: 0px">
    <div class="container">
    <div class="content">
      <p class="subtitle"><strong>Conclusion</strong></p>
      <p>
        Details pending
    changing rules and schema versioning
    can manage own data or others can


      </p>

    </div>
    </div>
</section>


</div>

</template>

<script>

export default {
  data () {
    return {
      jc: "console.log('Hello World sup')",
      tech_reqs: [
        'UI users.',
        'API users.',
        'Analytics users.',
        'Dynamic permissions',
        'Backup and recovery.       Historical record'
      ],


      // table: table,
      cfte_defs: [
        {'eqn': 'cFTE = Total_FTE - (Academic_FTE + Research_FTE + Administrative_FTE)', 
          'desc': 'The total effort is subtracted from the sum of sub appointment values. All parameters must be between 0 and 1', 'name': 'One Minus'},
        {'eqn': 'cFTE = clinical_effort/total_effort', 'desc': 'Fraction of hours assigned for clinical work divided by the providers total appointment', 
        'name': 'Fractional'},
        {'eqn': 'cFTE = (hrs_per_session*assigned_sessions + hrs_per_shift*assigned_shifts)/(hrs_per_session*max_sessions + hrs_per_shift*max_shifts)', 
          'desc': 'Shifts and sessions are nomenclature for a full and half days worth of work. Each shift and session is assigned a duration. The cfte is calculated as fraction of hours worked based on appointed shifts and sessions'
          ,'name': 'Shift and Sessions'},
      ],
      jsonx: jsonx,


      pe_table: pe_table,
      current_effort: current_effort_view,
      as_of_effort: as_of_effort,
      version_trigger: version_trigger,
      rls: rls,
      trls: trls
    }
  }

}

const jsonx =
`[
  {field: 'name',  type: 'string'},
  {field: 'sport', type: 'json'  }, 
  {field: 'date',  type: 'date'  },
  {field: 'wins',  type: 'int'   }
]
`


// https://www.cybertec-postgresql.com/en/implementing-as-of-queries-in-postgresql/


// as of table query
const pe_table = 
`CREATE EXTENSION IF NOT EXISTS btree_gist;
CREATE TABLE provider_effort
(
    id               big integer,
    valid            tstzrange,
    user_id          big integer, 
    effective_date   date,
    cfte_def_id      big integer
    cfte             json,
    last_modified_by big integer
    EXCLUDE USING gist (id WITH =, valid WITH &&)
);
`
/*
EXCLUDE USING gist (id WITH =, valid WITH &&)

EXCLUDE: Indicates that an exclusion constraint is being defined.

USING gist: Specifies that the constraint will use a GiST index.

(id WITH =, valid WITH &&): Defines the exclusion condition. In this case, it's a combination of two conditions:

id WITH =: Specifies that the id column values must be equal for the rows being compared.

valid WITH &&: Specifies that the valid column values must have overlapping ranges. The && operator is the "overlaps" operator for range types.
*/

//updatable view
const current_effort_view = 
`CREATE VIEW current_provider_effort as
  SELECT user_id, effective_date, cfte_def_id, cfte, last_modified_by
  FROM provider_effort
  WHERE current_timestamp <@ valid
`



const as_of_effort =
`CREATE VIEW as_of_provider_effort AS
    SELECT  user_id, effective_date, cfte_def_id, cfte, last_modified_by
    FROM    provider_effort
    WHERE   current_setting('app.as_of_time')::timestamptz <@ valid;

--Run Query
BEGIN;
SET app.as_of_time = {datetime value};
SELECT * FROM as_of_provider_effort;
COMMIT;
`

const version_trigger =
`CREATE FUNCTION version_trigger() RETURNS trigger AS
$$
BEGIN
    IF TG_OP = 'UPDATE'
    THEN
        IF NEW.id <> OLD.id
        THEN
            RAISE EXCEPTION 'the ID must not be changed';
        END IF;
 
        UPDATE  provider_effort
        SET     valid = tstzrange(lower(valid), current_timestamp)
        WHERE   id = NEW.id
            AND current_timestamp <@ valid;
 
        IF NOT FOUND THEN
            RETURN NULL;
        END IF;
    END IF;
 
    IF TG_OP IN ('INSERT', 'UPDATE')
    THEN
        INSERT INTO provider_effort (id, valid, user_id, effective_date, cfte_def_id, cfte, last_modified_by)
            VALUES (NEW.id,
                tstzrange(current_timestamp, TIMESTAMPTZ 'infinity'),
                NEW.user_id,
                NEW.effective_date,
                NEW.cfte_def_id,
                NEW.cfte,
                NEW.last_modified_by
                );
 
        RETURN NEW;
    END IF;
 
    IF TG_OP = 'DELETE'
    THEN
        UPDATE  provider_effort
        SET     valid = tstzrange(lower(valid), current_timestamp)
        WHERE id = OLD.id
            AND current_timestamp <@ valid;
 
        IF FOUND THEN
            RETURN OLD;
        ELSE
            RETURN NULL;
        END IF;
    END IF;
END;
$$ LANGUAGE plpgsql;
 
CREATE TRIGGER vtrigger
    INSTEAD OF INSERT OR UPDATE OR DELETE
    ON current_effort
    FOR EACH ROW
    EXECUTE PROCEDURE version_trigger();
`

//rls and updatable views

const rls = 
`CREATE VIEW provider_effort_user_perms
SELECT * FROM current_effort
WHERE EXISTS ( SELECT 1
  FROM appointments
  WHERE current_effort.provider_id   = appointments.provider_id
  AND current_setting('app.user_id') = appointments.user_id
  AND current_effort.effective_date BETWEEN appointments.start_date AND appointments.end_date
) OR
EXISTS ( SELECT 1
FROM staff
WHERE staff.id = provider_id AND staff.user_id = current_setting('app.user_id')
) OR
current_setting('app.user_is_admin') = true
`

//enforces rls permissions.
const trls =
`BEGIN;
SET app.user_id = {user_id};
--crud_statement i.e. select/insert/update/delete--
COMMIT;
`


//changing rules and schema versioning
//can manage own data or others can


/*
users: oauth_id (Managed by active directory)
  id, first_name, last_name, oauth_id, npi, employee_number, is_provider, is_manager, meta_data, valid, last_modified_by

departments
  id, name, valid, last_modified_by

department_employees
  id, user_id, department_id, start_date, end_date, valid, last_modified_by

cfte_definitions
  id, name, description, terms, valid, last_modified_by

provider_effort
  provider_id, effective_date, cfte_definition_id, valid, last_modified_by




*/

</script>
