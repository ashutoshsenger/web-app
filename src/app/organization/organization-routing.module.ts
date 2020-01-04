/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { OrganizationComponent } from './organization.component';
import { LoanProvisioningCriteriaComponent } from './loan-provisioning-criteria/loan-provisioning-criteria.component';
import { OfficesComponent } from './offices/offices.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { SmsCampaignsComponent } from './sms-campaigns/sms-campaigns.component';
import { AdhocQueryComponent } from './adhoc-query/adhoc-query.component';
import { TellersComponent } from './tellers/tellers.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { PasswordPreferencesComponent } from './password-preferences/password-preferences.component';
import { EntityDataTableChecksComponent } from './entity-data-table-checks/entity-data-table-checks.component';
import { WorkingDaysComponent } from './working-days/working-days.component';
import { CreateOfficeComponent } from './offices/create-office/create-office.component';
import { CreatePaymentTypeComponent } from './payment-types/create-payment-type/create-payment-type.component';

/** Custom Resolvers */
import { LoanProvisioningCriteriaResolver } from './loan-provisioning-criteria/loan-provisioning-criteria.resolver';
import { OfficesResolver } from './offices/offices.resolver';
import { EmployeesResolver } from './employees/employees.resolver';
import { CurrenciesResolver } from './currencies/currencies.resolver';
import { SmsCampaignsResolver } from './sms-campaigns/sms-campaigns.resolver';
import { AdhocQueriesResolver } from './adhoc-query/adhoc-queries.resolver';
import { TellersResolver } from './tellers/tellers.resolver';
import { PaymentTypesResolver } from './payment-types/payment-types.resolver';
import { PasswordPreferencesTemplateResolver } from './password-preferences/password-preferences-template.resolver';
import { EntityDataTableChecksResolver } from './entity-data-table-checks/entity-data-table-checks.resolver';
import { WorkingDaysResolver } from './working-days/working-days.resolver';

/** Organization Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'organization',
      data: { title: extract('Organization'), breadcrumb: 'Organization' },
      children: [
        {
          path: '',
          component: OrganizationComponent
        },
        {
          path: 'provisioning-criteria',
          component: LoanProvisioningCriteriaComponent,
          data: { title: extract('Provisioning Criteria'), breadcrumb: 'Provisioning Criteria' },
          resolve: {
            loanProvisioningCriteria: LoanProvisioningCriteriaResolver
          }
        },
        {
          path: 'offices',
          data: { title: extract('Manage Offices'), breadcrumb: 'Manage Offices' },
          children: [
            {
              path: '',
              component: OfficesComponent,
              resolve: {
              offices: OfficesResolver
              }
            },
            {
              path: 'create',
              component: CreateOfficeComponent,
              data: { title: extract('Create Office'), breadcrumb: 'Create Office' },
              resolve: {
                offices: OfficesResolver,
              }
            }
          ]
        },
        {
          path: 'employees',
          data: { title: extract('Manage Employees'), breadcrumb: 'Manage Employees' },
          children: [
            {
              path: '',
              component: EmployeesComponent,
              resolve: {
                employees: EmployeesResolver
              }
            },
            {
              path: 'create',
              component: CreateEmployeeComponent,
              data: { title: extract('Create Employee'), breadcrumb: 'Create Employee' },
              resolve: {
                offices: OfficesResolver
              }
            }
          ]
        },
        {
          path: 'currencies',
          component: CurrenciesComponent,
          data: { title: extract('Currency Configuration'), breadcrumb: 'Currency Configuration' },
          resolve: {
            currencies: CurrenciesResolver
          }
        },
        {
          path: 'sms-campaigns',
          component: SmsCampaignsComponent,
          data: { title: extract('SMS Campaigns'), breadcrumb: 'SMS Campaigns' },
          resolve: {
            smsCampaigns: SmsCampaignsResolver
          }
        },
        {
          path: 'adhoc-query',
          data: { title: extract('Adhoc Query'), breadcrumb: 'Adhoc Query' },
          children: [
            {
              path: '',
              component: AdhocQueryComponent,
              resolve: {
                adhocQueries: AdhocQueriesResolver
              }
            }
          ]
        },
        {
          path: 'tellers',
          component: TellersComponent,
          data: { title: extract('Tellers'), breadcrumb: 'Tellers' },
          resolve: {
            tellers: TellersResolver
          }
        },
        {
          path: 'payment-types',
          data: { title: extract('Payment Types'), breadcrumb: 'Payment Types' },
          children: [
            {
              path: '',
              component: PaymentTypesComponent,
              resolve: {
                paymentTypes: PaymentTypesResolver
              }
            },
            {
              path: 'create',
              component: CreatePaymentTypeComponent,
              data: { title: extract('Create Payment Type'), breadcrumb: 'Create Payment Type'}
            }
          ]
        },
        {
          path: 'password-preferences',
          component: PasswordPreferencesComponent,
          data: { title: extract('Password Preferences'), breadcrumb: 'Password Preferences' },
          resolve: {
            passwordPreferencesTemplate: PasswordPreferencesTemplateResolver
          }
        },
        {
          path: 'entity-data-table-checks',
          component: EntityDataTableChecksComponent,
          data: { title: extract('Entity Data Table Checks'), breadcrumb: 'Entity Data Table Checks' },
          resolve: {
            entityDataTableChecks: EntityDataTableChecksResolver
          }
        },
        {
          path: 'working-days',
          component: WorkingDaysComponent,
          data: { title: extract('Working Days'), breadcrumb: 'Working Days' },
          resolve: {
            workingDays: WorkingDaysResolver
          }
        }
      ]
    }
  ])
];

/**
 * Organization Routing Module
 *
 * Configures the organization routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LoanProvisioningCriteriaResolver,
    OfficesResolver,
    EmployeesResolver,
    CurrenciesResolver,
    SmsCampaignsResolver,
    AdhocQueriesResolver,
    TellersResolver,
    PaymentTypesResolver,
    PasswordPreferencesTemplateResolver,
    EntityDataTableChecksResolver,
    WorkingDaysResolver
  ]
})
export class OrganizationRoutingModule { }