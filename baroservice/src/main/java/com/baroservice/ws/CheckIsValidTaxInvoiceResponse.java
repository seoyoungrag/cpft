
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
 *         &lt;element name="CheckIsValidTaxInvoiceResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
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
    "checkIsValidTaxInvoiceResult"
})
@XmlRootElement(name = "CheckIsValidTaxInvoiceResponse")
public class CheckIsValidTaxInvoiceResponse {

    @XmlElement(name = "CheckIsValidTaxInvoiceResult")
    protected int checkIsValidTaxInvoiceResult;

    /**
     * checkIsValidTaxInvoiceResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getCheckIsValidTaxInvoiceResult() {
        return checkIsValidTaxInvoiceResult;
    }

    /**
     * checkIsValidTaxInvoiceResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setCheckIsValidTaxInvoiceResult(int value) {
        this.checkIsValidTaxInvoiceResult = value;
    }

}
