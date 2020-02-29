using ProjetoAgenda.Contexto;
using ProjetoAgenda.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoAgenda.Controllers
{
    public class EmailsController : Controller
    {
        // GET: Emails
        DBContext db = new DBContext();
        // GET: Telefones
        public ActionResult ListarEmails(int id)
        {
            var lista = db.Emails.Where(m => m.Contato.Id == id);
            ViewBag.Contato = id;
            return PartialView(lista);

        }

        public ActionResult SalvarEmails(string email, int idContato)
        {
            var Email = new Email()
            {
                EnderecoEmail = email,
                Contato = db.Contatos.Find(idContato)

            };

            db.Emails.Add(Email);
            db.SaveChanges();

            return Json(new { Resultado = Email.Id }, JsonRequestBehavior.AllowGet);

        }
    }
}