
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetTaxInvoiceSalesListByIDExResult" type="{http://ws.baroservice.com/}PagedTaxInvoiceEx" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getTaxInvoiceSalesListByIDExResult"
})
@XmlRootElement(name = "GetTaxInvoiceSalesListByIDExResponse")
public class GetTaxInvoiceSalesListByIDExResponse {

    @XmlElement(name = "GetTaxInvoiceSalesListByIDExResult")
    protected PagedTaxInvoiceEx getTaxInvoiceSalesListByIDExResult;

    /**
     * getTaxInvoiceSalesListByIDExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public PagedTaxInvoiceEx getGetTaxInvoiceSalesListByIDExResult() {
        return getTaxInvoiceSalesListByIDExResult;
    }

    /**
     * getTaxInvoiceSalesListByIDExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public void setGetTaxInvoiceSalesListByIDExResult(PagedTaxInvoiceEx value) {
        this.getTaxInvoiceSalesListByIDExResult = value;
    }

}
