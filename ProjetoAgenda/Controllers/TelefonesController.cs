using ProjetoAgenda.Contexto;
using ProjetoAgenda.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoAgenda.Controllers
{
    public class TelefonesController : Controller
    {

        DBContext db = new DBContext();
        // GET: Telefones
        public ActionResult ListarFones(int id)
        {
            var lista = db.Telefones.Where(m => m.Contato.Id == id);
            ViewBag.Contato = id;
            return PartialView(lista);
            
        }

        public ActionResult Salvar(string telefone, int idContato)
        {
            var Telefone = new Telefone()
            {
                NumeroTelefone = telefone,
                Contato = db.Contatos.Find(idContato)

            };

            db.Telefones.Add(Telefone);
            db.SaveChanges();

            return Json(new { Resultado = Telefone.Id }, JsonRequestBehavior.AllowGet);

        }
    }

    
}